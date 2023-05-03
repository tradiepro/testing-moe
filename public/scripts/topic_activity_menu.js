let difficulty_lvl = "";
let stopwatch = "";
let table_num = "";

let change_awards_and_examples_OnMouseOver = true;
let OnMouseLeave_from_task = true;

level_NodeList = document.querySelectorAll('.level-button');

level_NodeList.forEach( (activity) => { document.getElementById(activity.id).textContent = activityName[activity.id]; console.log(activity.id+' : '+activityName[activity.id]); });

let numTask = level_NodeList.length;
level_NodeList.forEach(bttn => { bttn.addEventListener('click', select_level); });
stopwatch_NodeList = document.querySelectorAll('.stopwatch-button');
stopwatch_NodeList.forEach(bttn => { bttn.addEventListener('click', select_stopwatch); });

let activity_data = [];

if (idKey != 'nonMember') { 
    fetch('/user_fetch/retrieve_all_activity_data/'+idKey)
    .then( response => response.json() )
    .then( resp => { activity_data = resp;  console.log('activity_data'); console.log(activity_data); console.log('##########');

        let trophyCnt = 0;
        
        activity_data.forEach( (activity) => { 
            let task = activity.activity;   // console.log(task);

            if (document.body.contains(document.getElementById(task))) {

                let score = activity.score;                                 // console.log(score);
                let attemptsData = activity.attempts.split(',');

                let maxScore = totalQu[task];   // console.log(maxScore);
                
                document.getElementById(task).classList.remove('blue');

                document.getElementById(task).classList.add('grn');

                trophy = parseInt(attemptsData[0]/3);
                ribbon = parseInt(attemptsData[1]/3);
                smiley = attemptsData[2];

                // trophy = attemptsData[0];
                // ribbon = attemptsData[1];
                // smiley = attemptsData[2];

                if (trophy > 0) { 
                    document.getElementById('award_'+task).innerHTML = '<img style="height:30px; transform:translate(-10px,3px);" src="/images/trophy.svg"></img>'; 
                    document.getElementById('topic_score').innerHTML += '<img style="height:30px; transform:translate(0px,10px);" src="/images/trophy.svg"></img>';
                    trophyCnt++;
                }
                else if (ribbon > 0) { 
                    document.getElementById('award_'+task).innerHTML = '<img style="height:24px; transform:translate(-5px,8px);" src="/images/ribbon.svg"></img>'; 
                }
                else { document.getElementById('award_'+task).innerHTML = '<img style="height:20px; transform:translate(-3px,10px);" src="/images/smiley.svg"></img>'; }
            }
        });
        for (let i=0; i < (numTask - trophyCnt); i++) { 
            document.getElementById('topic_score').innerHTML += '<img style="height:30px; transform:translate(0px,10px); opacity:0.1;" src="/images/trophy.svg"></img>';
        }
    });
    document.getElementById('display_data').innerHTML = '<span style="font-size:16px; font-weight:bold;">Launch activity,<br>start earning awards!</span>';
}
else { 
    level_NodeList.forEach( bttn => { 
        document.getElementById('topic_score').innerHTML += '<img style="height:30px; transform:translate(0px,10px); opacity:0.1;" src="/images/trophy.svg"></img>';
    });
    document.getElementById('display_data').innerHTML = '<span style="font-size:16px; font-weight:bold; color:red;">Log in and launch<br>into learning!</span>';
}

function showEg(id) { OnMouseLeave_from_task = false;  // as just entered Task with OnMouseOver
    if (change_awards_and_examples_OnMouseOver) {
        stopwatch_NodeList[0].style.display = 'none';  stopwatch_NodeList[1].style.display = 'none';   
        document.getElementById('eg_frame').style.display = 'block';  document.getElementById('eg_data').style.display = 'block';
        document.getElementById('eg_data').innerHTML = '<u>Sample questions</u><br><span style="font-size:15px;">No# of questions: '+totalQu[id]+'</span><br>'+showEG[id];
        
        if (idKey != 'nonMember') { display_activity_awards(id); }
    }
} 

function clearEg() { OnMouseLeave_from_task = true;

    if (change_awards_and_examples_OnMouseOver) {
        setTimeout( () => {
            if (OnMouseLeave_from_task) {
                document.getElementById('eg_frame').style.display = 'none';  document.getElementById('eg_data').style.display = 'none';
                stopwatch_NodeList[0].style.display = 'block';  stopwatch_NodeList[1].style.display = 'block'; 
            }
        }, 600);
        document.getElementById('display_award').innerHTML = '<img style="height:100px;" src="/images/positive.svg"></img>';
        document.getElementById('num_trophy').innerHTML = '0'; document.getElementById('num_ribbon').innerHTML = '0'; document.getElementById('num_smiley').innerHTML = '0';
    }
} 

function display_activity_awards(id) {                                          // console.log(activity_data);
    
    let display_value = activity_data.find( (element) => element.activity == id );      // console.log(display_value);

    if (display_value == undefined) { 
        document.getElementById('num_trophy').innerHTML = '0'; document.getElementById('num_ribbon').innerHTML = '0'; document.getElementById('num_smiley').innerHTML = '0';
        
        document.getElementById('display_data').innerHTML = '<span style="font-size:16px; font-weight:bold;">Launch activity,<br>start earning awards!</span>';
        
        if (idKey != 'nonMember') { document.getElementById('display_award').innerHTML = '<img style="height:100px;" src="/images/positive.svg"></img>'; }
    }
    else { 
        let time = display_value.time;
        let attemptsData = display_value.attempts.split(',');

        trophy = parseInt(attemptsData[0]/3);
        ribbon = parseInt(attemptsData[1]/3);
        smiley = attemptsData[2];
        
        // trophy = attemptsData[0];
        // ribbon = attemptsData[1];
        // smiley = attemptsData[2];

        if (time != 'off') { time = parseInt(time);  minutes = parseInt(time/60);  seconds = time%60;  
            if (10 > seconds) { seconds = '0'+seconds; } 
            time = minutes + ':' + seconds;
        }        
        else { time= 'none'; }

        document.getElementById('display_data').innerHTML = 'Best Score: '+display_value.score+'<br>Best Time: '+time;
        document.getElementById('num_trophy').textContent = trophy;
        document.getElementById('num_ribbon').textContent = ribbon;
        document.getElementById('num_smiley').textContent = smiley;

        if (trophy > 0) { document.getElementById('display_award').innerHTML = '<img style="height:100px;" src="/images/trophy.svg"></img>'; }
        
        else if (ribbon > 0) { document.getElementById('display_award').innerHTML = '<img style="height:100px;" src="/images/ribbon.svg"></img>'; }
        
        else { document.getElementById('display_award').innerHTML = '<img style="height:100px;" src="/images/smiley.svg"></img>'; }
    }
}

function select_level(e){ 
    
    if (stopwatch == "" & difficulty_lvl == ""){ 
        stopwatch_NodeList[0].classList.add("bounce-1");  stopwatch_NodeList[1].classList.add("bounce-2"); 
    }        

    difficulty_lvl = e.target.id;

    change_awards_and_examples_OnMouseOver = false;

    level_NodeList.forEach( bttn => { bttn.classList.remove('button_font_size_22');
        document.getElementById('tick_'+bttn.id).style.display = 'none'; document.getElementById(bttn.id).classList.remove('border');
    });

    e.target.classList.add('button_font_size_22');
    
    document.getElementById('tick_'+difficulty_lvl).style.display = 'block'; document.getElementById(difficulty_lvl).classList.add('border');
    
    document.getElementById('eg_frame').style.display = 'none';  document.getElementById('eg_data').style.display = 'none';
    
    stopwatch_NodeList[0].style.display = 'block';  stopwatch_NodeList[1].style.display = 'block';
    
    display_activity_awards(difficulty_lvl);

    if (stopwatch != "" & difficulty_lvl != "") {document.getElementById("go-button").classList.add("red_animate");}
}

function select_stopwatch(e){  stopwatch = e.target.id;                     // console.log(stopwatch)

    stopwatch_NodeList.forEach(bttn => { bttn.style.backgroundColor = ''; });  e.target.style.backgroundColor = '#c6e385';                             

    stopwatch_NodeList[0].classList.remove("bounce-1");  stopwatch_NodeList[1].classList.remove("bounce-2"); 

    if(difficulty_lvl != "" && stopwatch != ""){ document.getElementById("go-button").classList.add("red_animate");  }
}

function start_game() { if(difficulty_lvl != "" && stopwatch != ""){ location.href="/play_finish/"+idKey+"/"+user+"/"+difficulty_lvl+"/"+stopwatch; } }

function log_out_chk() { document.getElementById('log_out_chk').style.display='block'; }