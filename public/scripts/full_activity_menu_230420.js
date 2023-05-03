// START - full_activity_menu.js

let fullActivityMenu = `

<style>
    .thisHoverStateON { font-size:16px; color:black; background-color:#e1fae9; border-radius:10px; padding:5px; }
    .thisHoverStateON:hover { color: black; background-color: #e1fae9; border-radius: 8px; }

    .thisHoverStateOFF { color:#555152; font-size:16px; padding:5px; }
    .thisHoverStateOFF:hover { color:black; background-color:#e1fae9; border-radius:10px; font-weight:bold; }

    .topic { color: black; font-size: 18px; text-decoration: underline; }
    .activity { color: black; cursor: pointer; }
    .activity:hover { color: blue; }
    .mult_div_number { color: black; cursor: pointer; display:flex; justify-content:center; align-items:center; }
    .mult_div_number:hover { color: blue; font-weight:bold; }    
    
    .review { color: brown; cursor: pointer;}
    .production { color: orange; cursor: pointer;}
    .needDesign { color: red; cursor: pointer;}
    
    .examples_title { justify-self:center; color:black; font-size:18px; }
    .examples_questions { justify-self:center; color:black; font-size:24px; line-height:1.8;}
    
    .numBttn { border-radius:6px; padding:3px; cursor:pointer; width: 80%; height: 90%;
                box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset; }
    
</style>

<div style="display: grid; grid-template-columns: 25px 20px 400px 90px 20px 400px 25px; grid-template-rows: repeat(200, 20px); justify-items:left;" id="activity_grid">

   <div style="grid-column:3/4; grid-row:1/3; transform: translate(0px, 10px);"><b><u>See question samples on hover:</u></b>&nbsp;&nbsp;
        <span class="thisHoverStateON" id="hover_ON_bttn" onmouseup="toggleHoverState(id)">ON</span>&nbsp;
        <span class="thisHoverStateOFF" id="hover_OFF_bttn" onmouseup="toggleHoverState(id)">OFF</span>
   </div>

    <div style="grid-column:3/4; grid-row:3/4;" class="topic" onmouseenter="clearEg()"><b>Places Value</b></div>    
    <div style="grid-column:3/4; grid-row:4/5;" id="" class="needDesign" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Identify digit place, up to 999</div>
    <div style="grid-column:3/4; grid-row:5/6;" id="" class="needDesign" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Identify digit place, up to 99 999</div>
    <div style="grid-column:3/4; grid-row:6/7;" id="" class="needDesign" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Identify digit place, 1000 to 1 000 000</div>
    <div style="grid-column:3/4; grid-row:7/8;" id="" class="needDesign" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Worth of a digit, up to 999</div>
    <div style="grid-column:3/4; grid-row:8/9;" id="" class="needDesign" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Worth of a digit, up to 99 999</div>
    <div style="grid-column:3/4; grid-row:9/10;" id="" class="needDesign" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Worth of a digit, 1000 to 1 000 000</div>
    <div style="grid-column:3/4; grid-row:10/11;" id="" class="needDesign" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Convert to number, up to 999</div>
    <div style="grid-column:3/4; grid-row:11/12;" id="" class="needDesign" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Convert to number, up to 99 999</div>
    <div style="grid-column:3/4; grid-row:12/13;" id="" class="needDesign" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Convert to number, 1000 to 1 000 000</div>
    <div style="grid-column:3/4; grid-row:13/14;" id="" class="needDesign" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Place value summary, up to 999</div>
    <div style="grid-column:3/4; grid-row:14/15;" id="" class="needDesign" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Place value summary, up to 999</div>
    <div style="grid-column:3/4; grid-row:15/16;" id="" class="needDesign" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Place value summary, 1000 to 1 000 000</div>

    <div style="grid-column:3/4; grid-row:17/18;" class="topic" onmouseenter="clearEg()"><b>Compare and Expand Numbers</b></div>
    <div style="grid-column:3/4; grid-row:18/19;" id="" class="needDesign" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Compare numbers, up to 999</div>
    <div style="grid-column:3/4; grid-row:19/20;" id="" class="needDesign" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Compare numbers, up to 99 999</div>
    <div style="grid-column:3/4; grid-row:20/21;" id="" class="needDesign" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Compare numbers, into the millions</div>
    <div style="grid-column:3/4; grid-row:21/22;" id="" class="needDesign" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Expand numbers, up to 999</div>
    <div style="grid-column:3/4; grid-row:22/23;" id="" class="needDesign" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Expand numbers, up to 99 999</div>
    <div style="grid-column:3/4; grid-row:23/24;" id="" class="needDesign" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Expand numbers, into the millions</div>

    <div style="grid-column:3/4; grid-row:25/26;" class="topic" onmouseenter="clearEg()"><b>Addition</b></div>
    <div style="grid-column:3/4; grid-row:26/27; " id="add_to_10" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:3/4; grid-row:27/28;" id="add_to_20" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:3/4; grid-row:28/29;" id="add_make_10" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:3/4; grid-row:29/30;" id="add_make_20" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:3/4; grid-row:30/31;" id="add_to_20_missing_num" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:3/4; grid-row:31/32;" id="add_a_b_c" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:3/4; grid-row:32/33;" id="add_to_100_using_10s" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:3/4; grid-row:33/34;" id="add_make_100_using_10s" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:3/4; grid-row:34/35;" id="add_2d_1d_no_regroup" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:3/4; grid-row:35/36;" id="add_2d_1d_with_regroup" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:3/4; grid-row:36/37;" id="add_bridge_century" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:3/4; grid-row:37/38;" id="needDesign" class="" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Make equal addition sentence</div>

    <div style="grid-column:3/4; grid-row:39/40;" class="topic" onmouseenter="clearEg()"><b>Doubles</b></div>
    <div style="grid-column:3/4; grid-row:40/41;" id="doubles_to_10" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:3/4; grid-row:41/42;" id="doubles_5_to_15" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:3/4; grid-row:42/43;" id="doubles_10_to_20" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:3/4; grid-row:43/44;" id="double_10s_to_100" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:3/4; grid-row:44/45;" id="double_5s_to_50" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:3/4; grid-row:45/46;" id="double_5s_to_100" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:3/4; grid-row:46/47;" id="doubles_to_50" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>

    <div style="grid-column:3/4; grid-row:48/49;" class="topic" onmouseenter="clearEg()"><b>Times Tables - 0 to 13</b></div>
    <div style="grid-column:3/8; grid-row:49/50; display:grid; grid-template-columns:450px repeat(10, 24px) repeat(4, 30px) 65px; grid-template-rows:20px;" id="tt_easy_click_answer"       onclick="highLightNumbers(id)" class="mult_div_activity"></div>
    <div style="grid-column:3/8; grid-row:50/51; display:grid; grid-template-columns:450px repeat(10, 24px) repeat(4, 30px) 65px; grid-template-rows:20px;" id="tt_easy_click_missing_num"  onclick="highLightNumbers(id)" class="mult_div_activity"></div>
    <div style="grid-column:3/8; grid-row:51/52; display:grid; grid-template-columns:450px repeat(10, 24px) repeat(4, 30px) 65px; grid-template-rows:20px;" id="tt_hard_click_answer"       onclick="highLightNumbers(id)" class="mult_div_activity"></div>
    <div style="grid-column:3/8; grid-row:52/53; display:grid; grid-template-columns:450px repeat(10, 24px) repeat(4, 30px) 65px; grid-template-rows:20px;" id="tt_hard_click_missing_num"  onclick="highLightNumbers(id)" class="mult_div_activity"></div>
    <div style="grid-column:3/8; grid-row:53/54; display:grid; grid-template-columns:450px repeat(10, 24px) repeat(4, 30px) 65px; grid-template-rows:20px;" id="tt_hard_click_question"     onclick="highLightNumbers(id)" class="mult_div_activity"></div>

    <div style="grid-column:3/4; grid-row:55/56;" class="topic" onmouseenter="clearEg()"><b>Division - 0 to 13</b></div>
    <div style="grid-column:3/8; grid-row:56/57; display:grid; grid-template-columns:450px repeat(10, 24px) repeat(4, 30px) 65px; grid-template-rows:20px;" id="div_easy_click_answer"      onclick="highLightNumbers(id)" class="mult_div_activity"></div>
    <div style="grid-column:3/8; grid-row:57/58; display:grid; grid-template-columns:450px repeat(10, 24px) repeat(4, 30px) 65px; grid-template-rows:20px;" id="div_easy_click_missing_num" onclick="highLightNumbers(id)" class="mult_div_activity"></div>
    <div style="grid-column:3/8; grid-row:58/59; display:grid; grid-template-columns:450px repeat(10, 24px) repeat(4, 30px) 65px; grid-template-rows:20px;" id="div_hard_click_answer"      onclick="highLightNumbers(id)" class="mult_div_activity"></div>
    <div style="grid-column:3/8; grid-row:59/60; display:grid; grid-template-columns:450px repeat(10, 24px) repeat(4, 30px) 65px; grid-template-rows:20px;" id="div_hard_click_missing_num" onclick="highLightNumbers(id)" class="mult_div_activity"></div>
    
    <div style="grid-column:3/4; grid-row:61/62;" class="topic" onmouseenter="clearEg()"><b>Multiples & Square Numbers</b></div>
    <div style="grid-column:3/4; grid-row:62/63;" id="expo_square_num_answer" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:3/4; grid-row:63/64;" id="expo_square_num_question" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:3/4; grid-row:64/65;" id="expo_square_root" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:3/4; grid-row:65/66;" id="exponents" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Evaluate the exponent</div>
    <div style="grid-column:3/4; grid-row:66/67;" id="multiples_easy" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:3/4; grid-row:67/68;" id="multiples_hard" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    
    <div style="grid-column:3/4; grid-row:69/70;" class="topic" onmouseenter="clearEg()"><b>Operations & BIDMAS</b></div>
    <div style="grid-column:3/4; grid-row:70/71;" id="operators_add_sub" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:3/4; grid-row:71/72;" id="operators_mult_divide" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:3/4; grid-row:72/73;" id="operators_mixed" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:3/4; grid-row:73/74;" id="bidmas_brackets" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:3/4; grid-row:74/75;" id="bidmas_operations" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:3/4; grid-row:75/76;" id="bidmas_with_indices" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:3/4; grid-row:76/77;" id="bidmas_advanced" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>

    <div style="grid-column:3/4; grid-row:79/80;" class="topic" onmouseenter="clearEg()"><b>Integers</b></div>
    <div style="grid-column:3/4; grid-row:80/81;" id="integer_sub_to_make_neg_num" class="approved" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Subtract to make a negative number</div>
    <div style="grid-column:3/4; grid-row:81/82;" id="integer_add_from_neg_num" class="approved" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Addition from a negative number</div>
    <div style="grid-column:3/4; grid-row:82/83;" id="integer_add_sub_easy" class="approved" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Add and subtract integers (basic)</div>
    <div style="grid-column:3/4; grid-row:83/84;" id="integer_simplify_expression" class="production" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Simplify integer expressions</div>
    <div style="grid-column:3/4; grid-row:84/85;" id="integer_add_subtract_rules" class="production" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Integer addition and subtraction rules</div>
    <div style="grid-column:3/4; grid-row:85/86;" id="integer_add_sub_median" class="production" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Add and subtract integers (median)</div>
    <div style="grid-column:3/4; grid-row:86/87;" id="integer_add_sub_chall" class="production" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Add and subtract integers (challenge)</div>
    <div style="grid-column:3/4; grid-row:87/88;" id="integer_add_sub_missing_num" class="production" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Add and subtract integers, find missing number</div>
    <div style="grid-column:3/4; grid-row:88/89;" id="integer_multiply_divide_rules" class="production" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Integer multiplication and division rules</div>
    <div style="grid-column:3/4; grid-row:89/90;" id="integer_multiply" class="production" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Multiplication of integers</div>
    <div style="grid-column:3/4; grid-row:90/91;" id="integer_divide" class="production" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Division of integers</div>
    <div style="grid-column:3/4; grid-row:91/92;" id="integer_multiply_divide" class="production" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Multiply and divide integers</div>
    <div style="grid-column:3/4; grid-row:92/93;" id="integer_evaluate" class="production" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Evaluate expressions involving integers</div>

    
    <div style="grid-column:3/4; grid-row:170/171;" class="topic" onmouseenter="clearEg()"><b>Money</b></div>
    <div style="grid-column:3/4; grid-row:171/172;" id="money_convert_cents_dollars" class="approved" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Convert cents and dollars</div>
    <div style="grid-column:3/4; grid-row:172/173;" id="money_addition" class="approved" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Addition of money</div>
    <div style="grid-column:3/4; grid-row:173/174;" id="money_change" class="approved" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Evaluation of change</div>
    <div style="grid-column:3/4; grid-row:174/175;" id="money_mixed_easy" class="approved" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Mixed money - easy</div>
    <div style="grid-column:3/4; grid-row:175/176;" id="money_mixed_hard" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Mixed money - hard</div>
    <div style="grid-column:3/4; grid-row:176/177;" id="money_mixed_chall" class="production" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Mixed money - challenge</div> 
 
    <div style="grid-column:3/4; grid-row:178/179;" class="topic" onmouseenter="clearEg()"><b>Fractions to Decimals</b></div>
    <div style="grid-column:3/4; grid-row:179/180;" id="" class="needDesign" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Multiply decimal by 10</div>
    <div style="grid-column:3/4; grid-row:180/181;" id="" class="needDesign" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Multiply decimal by 100</div>
    <div style="grid-column:3/4; grid-row:181/182;" id="" class="needDesign" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Multiply decimal by 1000</div>
    <div style="grid-column:3/4; grid-row:182/183;" id="" class="needDesign" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Multiply decimal by 10, 100 & 1000</div>
    <div style="grid-column:3/4; grid-row:183/184;" id="" class="needDesign" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Divide decimal by 10</div>
    <div style="grid-column:3/4; grid-row:184/185;" id="" class="needDesign" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Divide decimal by 100</div>
    <div style="grid-column:3/4; grid-row:185/186;" id="" class="needDesign" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Divide decimal by 1000</div>

    <div style="grid-column:3/4; grid-row:187/188;" class="topic" onmouseenter="clearEg()"><b>Decimals</b></div>
    <div style="grid-column:3/4; grid-row:188/189;" id="dec_mult_by_10" class="approved" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Multiply decimal by 10</div>
    <div style="grid-column:3/4; grid-row:189/190;" id="dec_mult_by_100" class="approved" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Multiply decimal by 100</div>
    <div style="grid-column:3/4; grid-row:190/191;" id="dec_mult_by_1000" class="approved" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Multiply decimal by 1000</div>
    <div style="grid-column:3/4; grid-row:191/192;" id="dec_mult_by_10_100_1000" class="approved" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Multiply decimal by 10, 100 & 1000</div>
    <div style="grid-column:3/4; grid-row:192/193;" id="dec_div_by_10" class="approved" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Divide decimal by 10</div>
    <div style="grid-column:3/4; grid-row:193/194;" id="dec_div_by_100" class="approved" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Divide decimal by 100</div>
    <div style="grid-column:3/4; grid-row:194/195;" id="dec_div_by_1000" class="approved" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Divide decimal by 1000</div>
    <div style="grid-column:3/4; grid-row:195/196;" id="" class="needDesign" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Comparing decimals</div>
    <div style="grid-column:3/4; grid-row:196/197;" id="add_sub_decimals" class="production" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Addition of decimals</div>

    <!-- #####################################################################################################  -->
    
    <div style="grid-column:6/8; grid-row:3/4;" class="topic" onmouseenter="clearEg()"><b>Whole Numbers</b></div>
    <div style="grid-column:6/8; grid-row:4/5;" id="" class="needDesign" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Identifing number as even or odd</div>
    <div style="grid-column:6/8; grid-row:5/6;" id="" class="needDesign" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Select the even or odd number</div>
    <div style="grid-column:6/8; grid-row:6/7;" id="" class="needDesign" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Number before or after</div>
    <div style="grid-column:6/8; grid-row:7/8;" id="" class="needDesign" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Select the even or odd number before and after</div>
    <div style="grid-column:6/8; grid-row:8/9;" id="" class="needDesign" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Identlify number from written words, up to 999</div>
    <div style="grid-column:6/8; grid-row:9/10;" id="" class="needDesign" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Identlify number from written words, up to 99 999</div>
    <div style="grid-column:6/8; grid-row:10/11;" id="" class="needDesign" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Identlify number from written words, 1000 to 1 000 000</div>
    <div style="grid-column:6/8; grid-row:11/12;" id="" class="needDesign" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Guess the number D-K.18</div>

    <div style="grid-column:6/8; grid-row:13/14;" class="topic" onmouseenter="clearEg()"><b>Rounding</b></div>
    <div style="grid-column:6/8; grid-row:14/15;" id="round_to_10s_easy" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:6/8; grid-row:15/16;" id="round_to_100s_easy" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:6/8; grid-row:16/17;" id="" class="needDesign" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Mixed rounding, 10s 100s basic</div>
    <div style="grid-column:6/8; grid-row:17/18;" id="round_to_10s_chall" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:6/8; grid-row:18/19;" id="round_to_100s_chall" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:6/8; grid-row:19/20;" id="round_to_1000s_chall" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:6/8; grid-row:20/21;" id="" class="needDesign" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Mixing rounding 10s 100s 1000s, basic</div>
    <div style="grid-column:6/8; grid-row:21/22;" id="rounding_mixed" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>


    <div style="grid-column:6/8; grid-row:25/26;" class="topic" onmouseenter="clearEg()"><b>Subtraction</b></div>
    <div style="grid-column:6/8; grid-row:26/27;" id="sub_within_10" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:6/8; grid-row:27/28;" id="sub_within_20" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:6/8; grid-row:28/29;" id="sub_from_10" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:6/8; grid-row:29/30;" id="sub_from_20" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:6/8; grid-row:30/31;" id="sub_within_20_missing_num" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:6/8; grid-row:31/32;" id="sub_20_a_b" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:6/8; grid-row:32/33;" id="sub_within_100_using_10s" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:6/8; grid-row:33/34;" id="sub_from_100_using_10s" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:6/8; grid-row:34/35;" id="sub_2d_1d_no_regrouping" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:6/8; grid-row:35/36;" id="sub_2d_1d_with_regrouping" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:6/8; grid-row:36/37;" id="sub_1d_from_100s" class="activity"onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:6/8; grid-row:37/38;" id="sub_bridge_century" class="activity"onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>

    <div style="grid-column:6/8; grid-row:39/40;" class="topic" onmouseenter="clearEg()"><b>Halves</b></div>
    <div style="grid-column:6/8; grid-row:40/41;" id="halves_to_10" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:6/8; grid-row:41/42;" id="halves_5_to_10" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:6/8; grid-row:42/43;" id="halves_10_to_20" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:6/8; grid-row:43/44;" id="half_10s_to_100" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:6/8; grid-row:44/45;" id="half_5s_to_50" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:6/8; grid-row:45/46;" id="half_5s_to_100" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:6/8; grid-row:46/47;" id="halves_to_50" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    

   <div style="grid-column:6/8; grid-row:53/54;" class="topic" onmouseenter="clearEg()"><b>Multiply numbers ending in zeroes</b></div>

    <div style="grid-column:6/8; grid-row:54/55;" id="multiply_by_10" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Multiply by 10</div>
    <div style="grid-column:6/8; grid-row:55/56;" id="multiply_by_100" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Multiply by 100</div>
    <div style="grid-column:6/8; grid-row:56/57;" id="multiply_by_1000" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Multiply by 1000</div>
    <div style="grid-column:6/8; grid-row:57/58;" id="mult_by_10_100_1000" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Mixed, Multiply by 10, 100 and 1000</div>
    <div style="grid-column:6/8; grid-row:58/59;" id="mult_num_ending_0s" class="acivity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Multiply numbers ending in zeros</div>
    
   <div style="grid-column:6/8; grid-row:60/61;" class="topic" onmouseenter="clearEg()"><b>Factors & Prime Numbers</b></div>

    <div style="grid-column:6/8; grid-row:61/62;" id="factors_to_20" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:6/8; grid-row:62/63;" id="factors_to_50" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:6/8; grid-row:63/64;" id="factors_to_100" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:6/8; grid-row:64/65;" id="factors_highest_common" class="production" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Highest Common Factor</div>
    <div style="grid-column:6/8; grid-row:65/66;" id="primes_to_50_chart" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:6/8; grid-row:66/67;" id="primes_to_100_chart" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:6/8; grid-row:67/68;" id="primes_to_50_noChart" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>

    <div style="grid-column:6/8; grid-row:69/70;" class="topic" onmouseenter="clearEg()"><b>Fractions</b></div>

    <div style="grid-column:6/8; grid-row:70/71;" id="frac_word_review" class="approved" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Fraction review, word problems</div>
    <div style="grid-column:6/8; grid-row:71/72;" id="frac_equiv_num" class="approved" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Equivalent fractions, find numerator</div>
    <div style="grid-column:6/8; grid-row:72/73;" id="frac_equiv_denom" class="approved" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Equivalent fractions, find denominator</div>
    <div style="grid-column:6/8; grid-row:73/74;" id="frac_equiv_easy_mixed" class="approved" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Equivalent fractions, mixed</div>
    <div style="grid-column:6/8; grid-row:74/75;" id="frac_equiv_chall" class="approved" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Equivalent fractions, mixed challenge</div>
    <div style="grid-column:6/8; grid-row:75/75;" id="frac_simplify" class="review" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Simplify fractions</div>




   <!-- #####################################################################################################  -->
   <div style="grid-column:6/8; grid-row:84/85;" class="topic" onmouseenter="clearEg()"><b>Measurement Conversion</b></div>

    <div style="grid-column:6/8; grid-row:85/86;" id="meas_convert_mm_whole_cm" class="approved" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Convert between millimetres & whole centimetres</div>
    <div style="grid-column:6/8; grid-row:86/87;" id="meas_convert_cm_whole_m" class="approved" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Convert between centimetres & whole metres</div>
    <div style="grid-column:6/8; grid-row:87/88;" id="meas_convert_mm_to_cm_mm" class="approved" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Convert millimetres to centimetres & millimetres</div>
    <div style="grid-column:6/8; grid-row:88/89;" id="meas_convert_cm_to_m_cm" class="approved" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Convert centimetres to metres & centimetres</div>
    <div style="grid-column:6/8; grid-row:89/90;" id="meas_convert_bt_cm_mm" class="approved" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Convert between centimetres & millimetres (dec)</div>
    <div style="grid-column:6/8; grid-row:90/91;" id="meas_convert_bt_m_cm" class="review" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Convert between metres & centimetres (dec)</div>
    <div style="grid-column:6/8; grid-row:91/92;" id="meas_convert_bt_m_cm_mm" class="review" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Convert b/t metres, centimetres & millimetres (dec)</div>
    <div style="grid-column:6/8; grid-row:92/93;" id="meas_convert_m_to_km_m" class="review" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Convert metres to kilometres & metres</div>
    <div style="grid-column:6/8; grid-row:93/94;" id="meas_convert_bt_km_m" class="review" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Convert between kilometres & metres (dec)</div>

   <!-- #####################################################################################################  -->

   <!-- #####################################################################################################  -->
   <div style="grid-column:6/8; grid-row:102/103;" class="topic" onmouseenter="clearEg()"><b>Fractions (operations)</b></div>    
    
    <div style="grid-column:6/8; grid-row:103/104;" id="frac_add_comm_dom" class="review" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Add fractions, common denominator</div>
    <div style="grid-column:6/8; grid-row:104/105;" id="frac_sub_comm_dom" class="review" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Subtract fractions, common denominator</div>
    <div style="grid-column:6/8; grid-row:105/106;" id="frac_add_sub_comm_dom" class="production" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Add & subtract fractions, common denominator</div>
    <div style="grid-column:6/8; grid-row:106/107;" id="frac_add_uncom_dom" class="production" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Add fractions, uncommon denominator</div>
    <div style="grid-column:6/8; grid-row:107/108;" id="frac_sub_uncom_dom" class="production" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Subtract fractions, uncommon denominator</div>
    <div style="grid-column:6/8; grid-row:108/109;" id="frac_add_sub_uncom_dom" class="needDesign" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Add and Subtract fractions, uncommon denominator</div>

   <!-- #####################################################################################################  -->


   <!-- #####################################################################################################  -->
    <div style="grid-column:1/3; grid-row:1/71; background-color:transparent; width:100%; height:100%" onmouseenter="clearEg()"></div>
    <div style="grid-column:5/6; grid-row:1/71; background-color:transparent; width:100%; height:100%; z-index:-1;" onmouseenter="clearEg()"></div>
    <div style="grid-column:4/5; grid-row:1/71; background-color:transparent; width:100%; height:100%; z-index:-1;" onmouseenter="clearEg()"></div>
    <div style="grid-column:7/8; grid-row:1/71; background-color:transparent; width:100%; height:100%" onmouseenter="clearEg()"></div>

    <div style="grid-column:4/8; grid-row:24/26; background-color:transparent; width:100%; height:100%" onmouseenter="clear_highLightNumbers()"></div>
    <div style="grid-column:4/8; grid-row:31/33; background-color:transparent; width:100%; height:100%" onmouseenter="clear_highLightNumbers()"></div>
    <div style="grid-column:4/8; grid-row:37/39; background-color:transparent; width:100%; height:100%" onmouseenter="clear_highLightNumbers()"></div>
    
    <div id="preview_background" style="grid-column:1/8; grid-row:1/14; z-index:1; display:none">
        <div style="display:grid; grid-template-columns:500px; grid-template-rows:16px 20px 10px 90px 14px; justify-items:center; ">
            <div style="grid-column:1/2; grid-row:1/6; background-color:white; width:100%; height:100%; border:5px solid #9ce5fc; border-radius:20px;" onmouseover="clearImmediate()"></div>
            <div id="preview_title" style="grid-column:1/2; grid-row:2/3; z-index:1; font-weight:bold;" class="examples_title"></div>
            <div id="preview_examples" style="grid-column:1/2; grid-row:4/5; z-index:1; line-height:1.4;" class="examples_questions"><span style="display:inline-block; text-align:center; ">showEG[id]</span></div>
        </div>
    </div>

</div>
`;

document.getElementById('full_activity_menu').innerHTML = fullActivityMenu;

activityList = document.querySelectorAll('.activity');
activityList.forEach( (activity) => { document.getElementById(activity.id).textContent = activityName[activity.id]; });

mult_div_activityList = document.querySelectorAll('.mult_div_activity');
mult_div_activityList.forEach( (activity) => { 
    document.getElementById(activity.id).innerHTML = `<div onmouseenter="showEg(this.parentNode.id)" onmouseleave="clearEg()">`+activityName[activity.id]+`</div>`+
                                                    `<div id="`+activity.id+`TT0"   onclick="activityPlay(id)" class="mult_div_number">0</div>` +
                                                    `<div id="`+activity.id+`TT1"   onclick="activityPlay(id)" class="mult_div_number">1</div>` +
                                                    `<div id="`+activity.id+`TT2"   onclick="activityPlay(id)" class="mult_div_number">2</div>` +
                                                    `<div id="`+activity.id+`TT3"   onclick="activityPlay(id)" class="mult_div_number">3</div>` +
                                                    `<div id="`+activity.id+`TT4"   onclick="activityPlay(id)" class="mult_div_number">4</div>` +
                                                    `<div id="`+activity.id+`TT5"   onclick="activityPlay(id)" class="mult_div_number">5</div>` +
                                                    `<div id="`+activity.id+`TT6"   onclick="activityPlay(id)" class="mult_div_number">6</div>` +
                                                    `<div id="`+activity.id+`TT7"   onclick="activityPlay(id)" class="mult_div_number">7</div>` +
                                                    `<div id="`+activity.id+`TT8"   onclick="activityPlay(id)" class="mult_div_number">8</div>` +
                                                    `<div id="`+activity.id+`TT9"   onclick="activityPlay(id)" class="mult_div_number">9</div>` +
                                                    `<div id="`+activity.id+`TT10"  onclick="activityPlay(id)" class="mult_div_number">10</div>` +
                                                    `<div id="`+activity.id+`TT11"  onclick="activityPlay(id)" class="mult_div_number">11</div>` +
                                                    `<div id="`+activity.id+`TT12"  onclick="activityPlay(id)" class="mult_div_number">12</div>` +
                                                    `<div id="`+activity.id+`TT13"  onclick="activityPlay(id)" class="mult_div_number">13</div>` +
                                                    `<div id="`+activity.id+`TTmixed" onclick="activityPlay(id)" class="mult_div_number">mixed</div>` ;
});

function toggleHoverState(hoverState) {
    if (hoverState == 'hover_OFF_bttn') {
        document.getElementById('hover_OFF_bttn').classList.remove('thisHoverStateOFF');  document.getElementById('hover_OFF_bttn').classList.add('thisHoverStateON');
        document.getElementById('hover_ON_bttn').classList.remove('thisHoverStateON');    document.getElementById('hover_ON_bttn').classList.add('thisHoverStateOFF');
    }
    else {
        document.getElementById('hover_OFF_bttn').classList.remove('thisHoverStateON');  document.getElementById('hover_OFF_bttn').classList.add('thisHoverStateOFF');
        document.getElementById('hover_ON_bttn').classList.remove('thisHoverStateOFF');    document.getElementById('hover_ON_bttn').classList.add('thisHoverStateON');        
    }
}

let onNewActivity = false;
 
function showEg(id) { // document.getElementById('tableNum_selection').style.display = 'none';
    
    if ( document.getElementById('hover_ON_bttn').classList.contains('thisHoverStateON') ) {
        
        onNewActivity = true;
    
        let xTask = parseInt(document.getElementById(id).style.gridColumnStart);
        let y = parseInt(document.getElementById(id).style.gridRowStart);
    
        if (xTask == 3) { 
            document.getElementById('preview_background').style.gridColumn = '4/8';     document.getElementById('preview_background').style.gridRow = (y-1)+'/'+(y+10);
            document.getElementById('preview_title').textContent = activityName[id];    document.getElementById('preview_examples').innerHTML = showEG[id];
        }
        if (xTask == 6) { 
            document.getElementById('preview_background').style.gridColumn = '2/5';     document.getElementById('preview_background').style.gridRow = (y-1)+'/'+(y+10);
            document.getElementById('preview_title').textContent = activityName[id];    document.getElementById('preview_examples').innerHTML = showEG[id];
        }
        setTimeout( () => { 
            if (onNewActivity == true) {
                document.getElementById('preview_background').style.display = 'block'; 
            }
        }, 10);
    }
}

function clearEg() {  onNewActivity = false;
    setTimeout( () => { 
        if (onNewActivity == false) { document.getElementById('preview_background').style.display = 'none'; }
    }, 10);
} 

function clearImmediate() { document.getElementById('preview_background').style.display = 'none'; onNewActivity = false; }

let mult_div_ids = ['tt_easy_click_answer', 'tt_easy_click_missing_num', 'tt_hard_click_answer', 'tt_hard_click_missing_num', 'tt_hard_click_question', 'div_easy_click_answer', 'div_easy_click_missing_num', 'div_hard_click_answer', 'div_hard_click_missing_num'];
function highLightNumbers(id) { document.getElementById('preview_background').style.display = 'none';

    mult_div_ids.forEach( (ele) => {  
        for (let n=0; n < 14; n++) { document.getElementById(ele+'TT'+n).classList.remove("numBttn"); }
        document.getElementById(ele+'TTmixed').classList.remove("numBttn");        
    });

    for (let n=0; n < 14; n++) { document.getElementById(id+'TT'+n).classList.add("numBttn"); }
    document.getElementById(id+'TTmixed').classList.add("numBttn");
}

function clear_highLightNumbers() {
    mult_div_ids.forEach( (ele) => {  
        for (let n=0; n < 14; n++) { document.getElementById(ele+'TT'+n).classList.remove("numBttn"); }
        document.getElementById(ele+'TTmixed').classList.remove("numBttn");        
    });    
}
