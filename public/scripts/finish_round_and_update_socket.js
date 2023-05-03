    function finishRound() {
        roundScores.push(correctCount);  // stored for finish display page
        roundTimes.push(secondsCount);  // stored for finish display page

        if (idKey != 'nonMember') { checkScoreUpdate(correctCount,secondsCount,roundNum); } // ##  Check if score & time has beaten previous high, update and allocate credit points. ##
        
        playNodeList.forEach(playNode => { playNode.style.display = "none"; });
        finishNodeList.forEach(finishNode => { finishNode.style.display = "block"; });

        document.getElementById("dingPlay").style.display = "none";
        document.getElementById("dingMute").style.display = "none";
        
        if (roundNum == 3) {
            document.getElementById("save_home_link").style.display = "none";
            document.getElementById("congratulations").style.display = "block";
            if (idKey == 'nonMember') { 
                document.getElementById("continue-message").insertAdjacentHTML('beforeend',`You will need to log in to save your progress...`); 
                document.getElementById("completion_link").innerHTML = '<a href=/log_in style="text-decoration:none;"><div class="menu_btn_added" >Log In</div></a>';
            }

            // THIS CODE IS AT END AFTER POINTS HAVE BEEN COUNTED
            // `Good work, you have earned `+session_credits+` points for...` 

            if ((idKey != 'nonMember')&&(session_credits == 0)) { 
                document.getElementById("continue-message").insertAdjacentHTML('beforeend',`Great work, keep practising. Click on...`); 
                document.getElementById("completion_link").innerHTML = '<div class="menu_btn_added" onclick=backToMain() style="transform:translate(-140px, -10px);">Main Menu</div>';
            }    
        } 
        else {
            document.getElementById("keep_going").style.display = "block";
            document.getElementById("continue-message").insertAdjacentHTML('beforeend', `Try to beat your score in Round ${roundNum+1}!`);
            if (idKey != 'nonMember') { document.getElementById("save_home_link").innerHTML = '<button id="save-home-bttn" onclick="backToMain()">Save progress<br>Exit Game</button>'; }
            else { document.getElementById("save_home_link").innerHTML = '<button id="save-home-bttn" onclick="backToMain()">Exit Game</button>'; }            
            document.getElementById("completion_link").innerHTML = '<button id="next-button" onclick="nextRound()">Keep going...<br>Next round</button>';
        }

        titleWave = noDelayWrapper(animateLetters, 100);
        
        triggerCelebration();
        
        for (let i = 0; i < roundNum; i++) {
            if (roundTimes[i] != 3599) {
                document.getElementById("results-container").insertAdjacentHTML('beforeend',`<h3>Your round ${i+1} score was <span style="color: #ff0000">${roundScores[i]}/${numOfQuestions}</span>. 
                Your time was <span style="color: #0075c7">${Math.floor(roundTimes[i]/60)}:${(roundTimes[i]%60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})}</span></h3>`);
            } else {
                document.getElementById("results-container").insertAdjacentHTML('beforeend',`<h3>Round ${i+1} score was <span style="color: #ff0000">${roundScores[i]}/${numOfQuestions}</span>.</h3>`);
            }
        }
    }
    
    function nextRound() {
        if (roundNum == 3) { backToMain() } 
        else { roundNum += 1; initialiseRound(); }
    }

    function backToMain() { window.location.replace('/'+idKey+'/'+user); }
    
    function to_my_Place() { window.location.replace('/my_place/'+idKey+'/'+user); }
    
    function pauseWrapper() { continueCurrentGame(); }

// Back end communications -----------------------------------------------------

let currentSession = 0;
let sessionHighestScore = 0;
let success = 0;
let timeOfHighestScore = 999;

let activityIsHomeWorkTask = false;
let homeWorkCnt = 3;
let hW_task = [];

let checkScoreUpdate;

const socket = io("https://teachertables.com");
socket.on('connect', () => { console.log(socket.id); // console.log(socket);

    checkScoreUpdate = function(correctCount,secondsCount,roundNum) { console.log('IN checkScoreUpdate');  console.log(secondsCount);

    // function checkScoreUpdate(correctCount,secondsCount,roundNum) { console.log(secondsCount);
    
        if (roundNum == 1) { currentSession = Date.now(); }
    
        if ( correctCount > sessionHighestScore ) { sessionHighestScore = correctCount; timeOfHighestScore = secondsCount; }
            
        let history = [ activity, roundNum, sessionHighestScore, timeOfHighestScore, currentSession ];
    
        // fetch('/user_fetch/update_history/'+idKey+'/'+history)
        // .then(response => response.text())
        // .then( resp => {  console.log(resp); });
    
        socket.emit('update_student_history', {"ref":idKey, "taskHistory":history}, (resp) => { console.log('resp'); console.log(resp); console.log('#####');});
    
        add_credit = 0;
    
        if (roundNum == 1) { console.log(activity);
    
            // fetch('/user_fetch/retrieve_homeWork/'+idKey)
            // .then( response => response.json() )
            // .then( resp => { 

            socket.emit('retrieve_student_homeWork', idKey, (resp) => {
            
                same_task_different_teacher_check_dates = [];
            
                resp.forEach( (res) => { // for each 'teacherTasks', where each could have 3, scroll thru to find a match.
                
                    let task = res.activityNotes.split(','); // none,3,1669705200000,add_to_100_using_10s,3,1669791600000,none,3,1669878000000,Mrs Ingwersen,g7x5tk,1669625942399,1669627242791
                    
                    if (task.length == 12 || task.length == 13) { task[12] = 'T1'; task[13] = 'T2'; task[14] = '0'; task[15] = '0'; task[16] = '0'; }
    
                    if ( task[0] == activity )      { activityIsHomeWorkTask = true;  dueDate = parseInt(task[2]); same_task_different_teacher_check_dates.push(task,dueDate,task[1]); }
                    else if ( task[3] == activity ) { activityIsHomeWorkTask = true;  dueDate = parseInt(task[5]); same_task_different_teacher_check_dates.push(task,dueDate,task[4]); }
                    else if ( task[6] == activity ) { activityIsHomeWorkTask = true;  dueDate = parseInt(task[8]); same_task_different_teacher_check_dates.push(task,dueDate,task[7]); }                
                });
                
                // console.log('same_task_different_teacher_check_dates');  console.log(same_task_different_teacher_check_dates);
                
                if (same_task_different_teacher_check_dates.length == 3) { // this means this activity has been allocated only once by any of the teacher/s
                    hW_task = same_task_different_teacher_check_dates[0];
                }
                
                else {  // if same task from 2 difference teacher, it sorts to see which is the earilest due date.
                    same_task_different_teacher_check_dates.sort( (a,b) => { return a[1] - b[1]; });
                    
                    hW_task = same_task_different_teacher_check_dates[0];  // then take the 1st as the homework tasks
                }
    
                homeWorkCnt = parseInt(same_task_different_teacher_check_dates[2]) - 1;                             console.log('homeWorkCnt: '+homeWorkCnt);
    
                // fetch('/retrieve_activity_value/'+idKey+'/'+activity)
                // .then(response => response.json()).then( activity_data => {                                           console.log(activity_data); 
                
                socket.emit('retrieve_activity_value', {"ref":idKey, "activity":activity}, (activity_data) => {         console.log(activity_data); 
        
                    attemptsData = activity_data.attempts.split(',');               console.log(attemptsData);
    
                    if (activityIsHomeWorkTask) { update_homework_task(); }
    
                    numAttempts = parseInt(attemptsData[2]) + 1;
                    certificates = parseInt(attemptsData[1]);
                    trophies = parseInt(attemptsData[0]);
        
            		if (correctCount < parseInt(activity_data.score)) { // if best_score has NOT been improved
            		    highestCount = activity_data.score;
            		    bestTimeCount = activity_data.time;
            		}
            		    
            		if (correctCount > parseInt(activity_data.score)) {                                                         // if best_score has been improved
            			if (secondsCount < 3599) { bestTimeCount = secondsCount.toString(); }                        // then just take new time for new best score
            			else { bestTimeCount = 'off' }                                                               // else timer is off is timer = 3599 (1 hr) from js code in template
                	    highestCount = correctCount.toString();
            		}
        
            		if (correctCount == parseInt(activity_data.score)) {                                                    // if best_score EQUALS
            			if (activity_data.time == 'off') {                                                        // check if timer has been previously recorded, if so, then
            				if (secondsCount == 3599) { bestTimeCount = 'off'; }                                 // check if user had timer turned on, if not, record 'off'
            				if (secondsCount < 3599) { bestTimeCount = secondsCount.toString(); }                // otherwise record new time b/c time had NOT previously been recorded
            			} 
            			else {
            				if (secondsCount < parseInt(activity_data.time)) { bestTimeCount = secondsCount.toString(); }  // if best time is better, record new score
            				else { bestTimeCount = activity_data.time; }                                                   // otherwise keep previously recorded score
            			}
            		    highestCount = activity_data.score;
            		}
        
                    if (correctCount == totalQu[activity]) { certificates = certificates + 1; }
                    if (correctCount == totalQu[activity]  && secondsCount < 91) { trophies = trophies + 1; }
        
                    attemptsData = trophies +','+ certificates +','+ numAttempts;       // console.log('attemptsData');  console.log(attemptsData);  console.log('#########');
        
                    // fetch('/user_fetch/update_activity_value/'+idKey+'/'+activity+'/'+highestCount+'/'+bestTimeCount+'/'+attemptsData)
                    // .then( response => response.text() ).then( resp => { 
                    
                    updateData = {"ref":idKey, "activity":activity, "score":highestCount, "time":bestTimeCount, "attempts":attemptsData };
                        
                    socket.emit('update_activity_value', updateData, (resp) => { 
                        
                        console.log(resp);
                        console.log('No credit for round 1.');
                    });
                });
            });
        }
    
        if ((roundNum == 2) || (roundNum == 3)) {
    
            numAttempts = parseInt(numAttempts) + 1;
    
            if (activityIsHomeWorkTask) { 
                homeWorkCnt = homeWorkCnt - 1;
                update_homework_task(); 
            }
    
    		if (correctCount > parseInt(highestCount)) {                                     // if best_score has been improved
    			if (secondsCount < 3599) { bestTimeCount = secondsCount.toString(); }                      // then just take new time for new best score
    			else { bestTimeCount = 'off' }                                                            // else timer is off is timer = 3599 (1 hr) from js code in template
    			
    			add_credit = add_credit + 1;                      // $$ credit for improving score
    			highestCount = correctCount.toString();
    		}
            else {
        		if (correctCount == parseInt(highestCount)) {                                     // if best_score EQUALS
        			if (bestTimeCount == 'off') {                                             // check if timer has been previously recorded, if so, then
        				if (secondsCount == 3599) { bestTimeCount = 'off'; }                               // check if user had timer turned on, if not, record 'off'
        				if (secondsCount < 3599) {                                                   // otherwise record new time b/c time had NOT previously been recorded
                            add_credit = add_credit + 1;              // $$ credit for posting a time
        					bestTimeCount = secondsCount.toString();
        				}
        			} 
        			else {
        				if (secondsCount < parseInt(bestTimeCount)) {
        					add_credit = add_credit + 1;             // $$ credit for improving a time
        					bestTimeCount = secondsCount.toString();                                          // if best time is better, record new score
        				}
        			}
        		}
            }
            
            if (correctCount == totalQu[activity]) { certificates = certificates + 1; }
            if (correctCount == totalQu[activity]  && secondsCount < 91) { trophies = trophies + 1; }
    
            attemptsData = trophies +','+ certificates +','+ numAttempts;       // console.log('attemptsData');  console.log(attemptsData);  console.log('#########');       
            
            // fetch('/user_fetch/update_activity_value/'+idKey+'/'+activity+'/'+highestCount+'/'+bestTimeCount+'/'+attemptsData+'/'+homeWorkCnt.toString())
            fetch('/user_fetch/update_activity_value/'+idKey+'/'+activity+'/'+highestCount+'/'+bestTimeCount+'/'+attemptsData)
            .then( response => response.text() )
            .then( resp => { 
                console.log(resp); 
    
                if (roundNum == 2) { add_credit = add_credit + 1; }
                if (roundNum == 3) { add_credit = add_credit + 2; }
    
                session_credits = session_credits + add_credit;
                console.log('session_credits = '+session_credits);
    
                if ((roundNum == 3)&&(session_credits > 0)) { 
                    document.getElementById("continue-message").insertAdjacentHTML('beforeend',`Good work, you have earned `+session_credits+` points for...`); 
                    document.getElementById("completion_link").innerHTML = '<a href="/my_place/'+idKey+'/'+user+'" style="text-decoration:none;" ><div class="menu_btn_added" style="transform:translate(-80px, -6px);">My Place</div></a>';
                    // uncomment the above and direct to My Place when it is UP. For now goto HOME
                    // document.getElementById("completion_link").innerHTML = '<button id="save-home-bttn" onclick="backToMain()">MY PLACE</button>';
                    // document.getElementById("completion_link").innerHTML = '<button id="save-home-bttn" onclick="to_my_place()">MY PLACE</button>';
                }
                    
                if (add_credit != 0) { console.log('just before fetch command sent, add_credit= '+add_credit);
                    fetch('/update_credit_value/'+idKey+'/'+add_credit)
                    .then( response => response.text() ).then( resp => console.log(resp) );
                }
                else { console.log('No credit update for this round.'); }
            });
        }
    
        update_homework_task = function(runningAverage) { console.log('hW_task IN update_homework_task');  console.log(hW_task);
    
        // function update_homework_task(runningAverage) { console.log('hW_task IN update_homework_task');  console.log(hW_task);
                    // ['exponents', '3', '1675666800000', 'halves_to_10', '2', '1675666800000', 'exponents', '3', '1675839600000', 'Mr NewTeacher', 'dj878w', '1675568860016', '1675571205600', '1675571205600', '0','0','0']
                    //                   operators_mixed,3,1676334054045,add_bridge_century,2,1676185200000,doubles_to_10,2,1676271600000,Mr Ingwersen,vy94w8,1676247711984,144822402956247710000,1676341020728,0,20,0
                    //                    add_to_100_using_10s,1,1676444400000,doubles_to_10,2,1676530800000,halves_to_10,3,1676617200000,Mr Ingwersen,vy94w8,1676342855687,144844797836342850000,1676343862484,18.5,3,
            if (homeWorkCnt == 0) { update_homework = 'none'; activityIsHomeWorkTask = false; }
            else { update_homework = activity; }
    
            let thisTask = [];
            
            thisAverage = Math.floor(100*correctCount/totalQu[activity]);           console.log('thisAverage');  console.log(thisAverage);  
            
            if ( hW_task[0] == activity ) { 
                if (homeWorkCnt == 2) {         hW_task[14] = thisAverage; }
                else if (homeWorkCnt == 1) {    hW_task[14] = ( parseInt(hW_task[14]) + thisAverage ) / 2 }
                else {                          hW_task[14] = (2 * parseInt(hW_task[14]) + thisAverage ) / 3 }
                console.log('runningAverage');  console.log(hW_task[14]);
                
                thisTask = [ update_homework, homeWorkCnt.toString(), hW_task[2], hW_task[3], hW_task[4], hW_task[5], hW_task[6], hW_task[7], hW_task[8], hW_task[9], hW_task[10], hW_task[11], (parseInt(hW_task[11]) + parseInt(hW_task[2]) * 86400000), Date.now().toString(), hW_task[14].toString(), hW_task[15], hW_task[16] ];
            }    
            else if ( hW_task[3] == activity ) {
                if (homeWorkCnt == 2) {         hW_task[15] = thisAverage; }
                else if (homeWorkCnt == 1) {    hW_task[15] = ( parseInt(hW_task[15]) + thisAverage ) / 2 }
                else {                          hW_task[15] = (2 * parseInt(hW_task[15]) + thisAverage ) / 3 }
                console.log('runningAverage');  console.log(hW_task[15]);
                
                thisTask = [ hW_task[0], hW_task[1], hW_task[2], update_homework, homeWorkCnt.toString(), hW_task[5], hW_task[6], hW_task[7], hW_task[8], hW_task[9], hW_task[10], hW_task[11], (parseInt(hW_task[11]) + parseInt(hW_task[5]) * 86400000), Date.now().toString(), hW_task[14], hW_task[15].toString(), hW_task[16] ];
            }
            else if ( hW_task[6] == activity ) {
                if (homeWorkCnt == 2) {         hW_task[16] = thisAverage; }
                else if (homeWorkCnt == 1) {    hW_task[16] = ( parseInt(hW_task[16]) + thisAverage ) / 2 }
                else {                          hW_task[16] = (2 * parseInt(hW_task[16]) + thisAverage ) / 3 }
                console.log('runningAverage');  console.log(hW_task[16]);
                
                thisTask = [ hW_task[0], hW_task[1], hW_task[2], hW_task[3], hW_task[4], hW_task[5], update_homework, homeWorkCnt.toString(), hW_task[8], hW_task[9], hW_task[10], hW_task[11], (parseInt(hW_task[11]) + parseInt(hW_task[8]) * 86400000), Date.now().toString(), hW_task[14], hW_task[15], hW_task[16].toString() ];
            }
               
                let post_next_student_tasks = function() { 
                    // console.log('thisTask');  console.log(thisTask); 
                    // console.log('thisTask teacherRef');  console.log(thisTask[10]);
                    // console.log('###################################################');
                    
                    fetch('/teacher_fetch/update_student_tasks/'+idKey+'/'+thisTask+'/'+thisTask[10])
                    .then( response => response.text() ).then( resp => { console.log(resp); 
                        if (resp != 'success|'+idKey ) { } //post_next_student_tasks(); }
                    });
                };
                post_next_student_tasks();
            // }
        }
    }
});