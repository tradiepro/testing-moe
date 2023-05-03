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
    .review { color: brown; cursor: pointer;}
    .production { color: orange; cursor: pointer;}
    
    .examples_title { justify-self:center; color:black; font-size:18px; }
    .examples_questions { justify-self:center; color:black; font-size:24px; line-height:1.8;}
    
    .tt_bttn { background-color:pink; border-radius:6px; padding:3px; cursor:pointer; }
</style>

<div style="display: grid; grid-template-columns: 25px 20px 400px 90px 20px 400px 25px; grid-template-rows: repeat(80, 20px); justify-items:left;" id="activity_grid">

   <div style="grid-column:3/4; grid-row:1/3; transform: translate(0px, 10px);"><b><u>See question samples on hover:</u></b>&nbsp;&nbsp;
        <span class="thisHoverStateON" id="hover_ON_bttn" onmouseup="toggleHoverState(id)">ON</span>&nbsp;
        <span class="thisHoverStateOFF" id="hover_OFF_bttn" onmouseup="toggleHoverState(id)">OFF</span>
   </div>

   <div style="grid-column:3/4; grid-row:3/4;" class="topic" onmouseenter="clearEg()"><b>Addition</b></div>

    <div style="grid-column:3/4; grid-row:4/5; " id="add_to_10" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:3/4; grid-row:5/6;" id="add_to_20" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:3/4; grid-row:6/7;" id="add_make_10" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:3/4; grid-row:7/8;" id="add_make_20" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:3/4; grid-row:8/9;" id="add_to_20_missing_num" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:3/4; grid-row:9/10;" id="add_a_b_c" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:3/4; grid-row:10/11;" id="add_to_100_using_10s" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:3/4; grid-row:11/12;" id="add_make_100_using_10s" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:3/4; grid-row:12/13;" id="add_2d_1d_no_regroup" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:3/4; grid-row:13/14;" id="add_2d_1d_with_regroup" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:3/4; grid-row:14/15;" id="add_bridge_century" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    
   <div style="grid-column:6/8; grid-row:2/3;" class="topic" onmouseenter="clearEg()"><b>Subtraction</b></div>

    <div style="grid-column:6/8; grid-row:3/4;" id="sub_within_10" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:6/8; grid-row:4/5;" id="sub_within_20" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:6/8; grid-row:5/6;" id="sub_from_10" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:6/8; grid-row:6/7;" id="sub_from_20" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:6/8; grid-row:7/8;" id="sub_within_20_missing_num" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:6/8; grid-row:8/9;" id="sub_20_a_b" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:6/8; grid-row:9/10;" id="sub_within_100_using_10s" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:6/8; grid-row:10/11;" id="sub_from_100_using_10s" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:6/8; grid-row:11/12;" id="sub_2d_1d_no_regrouping" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:6/8; grid-row:12/13;" id="sub_2d_1d_with_regrouping" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:6/8; grid-row:13/14;" id="sub_1d_from_100s" class="activity"onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:6/8; grid-row:14/15;" id="sub_bridge_century" class="activity"onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    
   <div style="grid-column:3/4; grid-row:16/17;" class="topic" onmouseenter="clearEg()"><b>Doubles</b></div>
   
    <div style="grid-column:3/4; grid-row:17/18;" id="doubles_to_10" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:3/4; grid-row:18/19;" id="doubles_5_to_15" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:3/4; grid-row:19/20;" id="doubles_10_to_20" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:3/4; grid-row:20/21;" id="double_10s_to_100" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:3/4; grid-row:21/22;" id="double_5s_to_50" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:3/4; grid-row:22/23;" id="double_5s_to_100" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:3/4; grid-row:23/24;" id="doubles_to_50" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    
   <div style="grid-column:6/8; grid-row:16/17;" class="topic" onmouseenter="clearEg()"><b>Halves</b></div>

    <div style="grid-column:6/8; grid-row:17/18;" id="halves_to_10" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:6/8; grid-row:18/19;" id="halves_5_to_10" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:6/8; grid-row:19/20;" id="halves_10_to_20" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:6/8; grid-row:20/21;" id="half_10s_to_100" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:6/8; grid-row:21/22;" id="half_5s_to_50" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:6/8; grid-row:22/23;" id="half_5s_to_100" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:6/8; grid-row:23/24;" id="halves_to_50" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    
    <!-- #####################################################################################################  -->
    <div style="grid-column:3/4; grid-row:25/26;" class="topic" onmouseenter="clearEg()"><b>Times Tables - 0 to 12</b></div>

    <div style="grid-column:3/4; grid-row:26/27;" id="tt_easy_click_answer" class="activity" onclick="display_tableNum(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:3/4; grid-row:27/28;" id="tt_easy_click_missing_num" class="activity" onclick="display_tableNum(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:3/4; grid-row:28/29;" id="tt_hard_click_answer" class="activity" onclick="display_tableNum(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:3/4; grid-row:29/30;" id="tt_hard_click_missing_num" class="activity" onclick="display_tableNum(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:3/4; grid-row:30/31;" id="tt_hard_click_question" class="activity" onclick="display_tableNum(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>

    <!-- #####################################################################################################  -->
    <div style="grid-column:6/8; grid-row:25/26;" class="topic" onmouseenter="clearEg()"><b>Division - 0 to 12</b></div>

    <div style="grid-column:6/7; grid-row:26/27;" id="div_easy_click_answer" class="activity" onclick="display_tableNum(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:6/7; grid-row:27/28;" id="div_easy_click_missing_num" class="activity" onclick="display_tableNum(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:6/7; grid-row:28/29;" id="div_hard_click_answer" class="activity" onclick="display_tableNum(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:6/7; grid-row:29/30;" id="div_hard_click_missing_num" class="activity" onclick="display_tableNum(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>

    <!-- #####################################################################################################  -->
   <div style="grid-column:3/4; grid-row:32/33;" class="topic" onmouseenter="clearEg()"><b>Multiples & Square Numbers</b></div>

    <div style="grid-column:3/4; grid-row:33/34;" id="expo_square_num_answer" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:3/4; grid-row:34/35;" id="expo_square_num_question" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:3/4; grid-row:35/36;" id="expo_square_root" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:3/4; grid-row:36/37;" id="exponents" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Evaluate the exponent</div>
    <div style="grid-column:3/4; grid-row:37/38;" id="multiples_easy" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:3/4; grid-row:38/39;" id="multiples_hard" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    
   <!-- #####################################################################################################  -->
   <div style="grid-column:6/8; grid-row:32/33;" class="topic" onmouseenter="clearEg()"><b>Multiply numbers ending in zeroes</b></div>

    <div style="grid-column:6/8; grid-row:33/34;" id="multiply_by_10" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Multiply by 10</div>
    <div style="grid-column:6/8; grid-row:34/35;" id="multiply_by_100" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Multiply by 100</div>
    <div style="grid-column:6/8; grid-row:35/36;" id="multiply_by_1000" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Multiply by 1000</div>
    <div style="grid-column:6/8; grid-row:36/37;" id="mult_by_10_100_1000" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Mixed, Multiply by 10, 100 and 1000</div>
    <div style="grid-column:6/8; grid-row:37/38;" id="mult_num_ending_0s" class="acivity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Multiply numbers ending in zeros</div>
    
   <!-- #####################################################################################################  -->
   <div style="grid-column:3/4; grid-row:40/41;" class="topic" onmouseenter="clearEg()"><b>Factors & Prime Numbers</b></div>

    <div style="grid-column:3/4; grid-row:41/42;" id="factors_to_20" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:3/4; grid-row:42/43;" id="factors_to_50" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:3/4; grid-row:43/44;" id="factors_to_100" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>

    <!--  <div style="grid-column:3/4; grid-row:44/45;" id="hcf_to_20" class="production" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">HCF: numbers up to 20</div>  -->

    <!--  <div style="grid-column:3/4; grid-row:45/46;" id="hcf_to_50" class="production" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">HCF: numbers up to 50</div>  -->
    
   <!--<div style="grid-column:6/8; grid-row:40/41;" class="topic" onmouseenter="clearEg()"><b>Prime Numbers</b></div>-->

    <div style="grid-column:3/4; grid-row:44/45;" id="primes_to_50_chart" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:3/4; grid-row:45/46;" id="primes_to_100_chart" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:3/4; grid-row:46/47;" id="primes_to_50_noChart" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    
   <div style="grid-column:3/4; grid-row:48/49;" class="topic" onmouseenter="clearEg()"><b>Rounding</b></div>

    <div style="grid-column:3/4; grid-row:49/50;" id="round_to_10s_easy" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:3/4; grid-row:50/51;" id="round_to_100s_easy" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:3/4; grid-row:51/52;" id="round_to_10s_chall" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:3/4; grid-row:52/53;" id="round_to_100s_chall" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:3/4; grid-row:53/54;" id="round_to_1000s_chall" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:3/4; grid-row:54/55;" id="rounding_mixed" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    
   <div style="grid-column:6/8; grid-row:45/46;" class="topic" onmouseenter="clearEg()"><b>Operations & BIDMAS</b></div>

    <div style="grid-column:6/8; grid-row:46/47;" id="operators_add_sub" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:6/8; grid-row:47/48;" id="operators_mult_divide" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:6/8; grid-row:48/49;" id="operators_mixed" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:6/8; grid-row:49/50;" id="bidmas_brackets" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:6/8; grid-row:50/51;" id="bidmas_operations" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    <div style="grid-column:6/8; grid-row:51/52;" id="bidmas_with_indices" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()"></div>
    
   <!-- #####################################################################################################  -->
   <div style="grid-column:3/4; grid-row:56/57;" class="topic" onmouseenter="clearEg()"><b>Money</b></div>

    <div style="grid-column:3/4; grid-row:57/58;" id="money_convert_cents_dollars" class="approved" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Convert cents and dollars</div>
    <div style="grid-column:3/4; grid-row:58/59;" id="money_addition" class="approved" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Addition of money</div>
    <div style="grid-column:3/4; grid-row:59/60;" id="money_change" class="approved" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Evaluation of change</div>
    <div style="grid-column:3/4; grid-row:60/61;" id="money_mixed_easy" class="approved" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Mixed money - easy</div>
    <div style="grid-column:3/4; grid-row:61/62;" id="money_mixed_hard" class="activity" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Mixed money - hard</div>

    <!-- <div style="grid-column:3/4; grid-row:62/63;" id="money_mixed_chall" class="production" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Mixed money - challenge</div>  --><!--  -->  
    
   <!-- #####################################################################################################  -->
   <div style="grid-column:6/8; grid-row:55/56;" class="topic" onmouseenter="clearEg()"><b>Integers</b></div>

    <div style="grid-column:6/8; grid-row:56/57;" id="integer_sub_to_make_neg_num" class="approved" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Subtract to make a negative number</div>
    <div style="grid-column:6/8; grid-row:57/58;" id="integer_add_from_neg_num" class="approved" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Addition from a negative number</div>
    <div style="grid-column:6/8; grid-row:58/59;" id="integer_add_sub_easy" class="approved" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Addition and subtraction of integers - easy</div>
 
    <!-- <div style="grid-column:6/8; grid-row:59/60;" id="firends_of_10_waiting_game" class="approved" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Friends of 10 waiting game</div>  -->
    
    <!-- <div style="grid-column:6/8; grid-row:59/60;" id="integer_add_sub_medium" class="production" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Addition and subtraction of integers - medium</div>  -->
    <!-- <div style="grid-column:6/8; grid-row:60/61;" id="integer_add_sub_hard" class="production" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Addition and subtraction of integers - hard</div>  -->
    <!-- <div style="grid-column:6/8; grid-row:61/62;" id="integer_add_sub_chall" class="production" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Addition and subtraction of integers - challenge</div>  -->

   <!-- #####################################################################################################  -->

   <div style="grid-column:3/4; grid-row:64/65;" class="topic" onmouseenter="clearEg()"><b>Decimals</b></div>

    <div style="grid-column:3/4; grid-row:65/66;" id="dec_mult_by_10" class="approved" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Multiply decimal by 10</div>
    <div style="grid-column:3/4; grid-row:66/67;" id="dec_mult_by_100" class="approved" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Multiply decimal by 100</div>
    <div style="grid-column:3/4; grid-row:67/68;" id="dec_mult_by_1000" class="approved" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Multiply decimal by 1000</div>
    <div style="grid-column:3/4; grid-row:68/69;" id="dec_mult_by_10_100_1000" class="approved" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Multiply decimal by 10, 100 & 1000</div>

    <div style="grid-column:3/4; grid-row:69/70;" id="dec_div_by_10" class="approved" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Divide decimal by 10</div>
    <div style="grid-column:3/4; grid-row:70/71;" id="dec_div_by_100" class="approved" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Divide decimal by 100</div>
    <div style="grid-column:3/4; grid-row:71/72;" id="dec_div_by_1000" class="approved" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Divide decimal by 1000</div>
    
   <!-- #####################################################################################################  -->

   <div style="grid-column:6/8; grid-row:63/64;" class="topic" onmouseenter="clearEg()"><b>Measurement</b></div>

    <div style="grid-column:6/8; grid-row:64/65;" id="meas_convert_mm_whole_cm" class="approved" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Convert between millimetres & whole centimetres</div>
    <div style="grid-column:6/8; grid-row:65/66;" id="meas_convert_cm_whole_m" class="approved" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Convert between centimetres & whole metres</div>

    <div style="grid-column:6/8; grid-row:66/67;" id="meas_convert_mm_to_cm_mm" class="approved" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Convert millimetres to centimetres & millimetres</div>
    <div style="grid-column:6/8; grid-row:67/68;" id="meas_convert_cm_to_m_cm" class="approved" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Convert centimetres to metres & centimetres</div>

    <div style="grid-column:6/8; grid-row:68/69;" id="meas_convert_bt_cm_mm" class="approved" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Convert between centimetres & millimetres</div>
    <div style="grid-column:6/8; grid-row:69/70;" id="meas_convert_bt_m_cm" class="approved" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Convert between metres & centimetres</div>
    <div style="grid-column:6/8; grid-row:70/71;" id="meas_convert_bt_m_cm_mm" class="approved" onclick="activityPlay(id)" onmouseenter="showEg(id)" onmouseleave="clearEg()">Convert b/t metres, centimetres & millimetres</div>

   <!-- #####################################################################################################  -->

    <div style="grid-column:1/3; grid-row:1/71; background-color:white; width:100%; height:100%" onmouseenter="clearEg()"></div>
    <div style="grid-column:5/6; grid-row:1/71; background-color:white; width:100%; height:100%" onmouseenter="clearEg()"></div>
    <div style="grid-column:4/5; grid-row:1/71; background-color:white; width:100%; height:100%" onmouseenter="clearEg()"></div>
    <div style="grid-column:7/8; grid-row:1/71; background-color:white; width:100%; height:100%" onmouseenter="clearEg()"></div>
    
    <div id="preview_background" style="grid-column:1/8; grid-row:1/14; z-index:1; display:none">
        <div style="display:grid; grid-template-columns:500px; grid-template-rows:16px 20px 10px 90px 14px; justify-items:center; ">
            <div style="grid-column:1/2; grid-row:1/6; background-color:white; width:100%; height:100%; border:5px solid #9ce5fc; border-radius:20px;" onmouseover="clearImmediate()"></div>
            <div id="preview_title" style="grid-column:1/2; grid-row:2/3; z-index:1; font-weight:bold;" class="examples_title"></div>
            <div id="preview_examples" style="grid-column:1/2; grid-row:4/5; z-index:1; line-height:1.4;" class="examples_questions"><span style="display:inline-block; text-align:center; ">showEG[id]</span></div>
        </div>
    </div>

    <div id="tableNum_selection" style="grid-column:4/5; grid-row:26/30; z-index:1; transform:translate(-40px); display:none;">
        <div style="display:grid; grid-template-columns:120px; grid-template-rows:19px 8px 19px 8px 19px 8px 19px; justify-items:center; ">
            <div style="grid-column:1/2; grid-row:1/2;">
                <span class="tt_bttn" onclick="make_activityPlay(textContent)">0</span>
                <span class="tt_bttn" onclick="make_activityPlay(textContent)">1</span>
                <span class="tt_bttn" onclick="make_activityPlay(textContent)">2</span>
                <span class="tt_bttn" onclick="make_activityPlay(textContent)">3</span>
            </div>
            <div style="grid-column:1/2; grid-row:3/4;">
                <span class="tt_bttn" onclick="make_activityPlay(textContent)">4</span>
                <span class="tt_bttn" onclick="make_activityPlay(textContent)">5</span>
                <span class="tt_bttn" onclick="make_activityPlay(textContent)">6</span>
                <span class="tt_bttn" onclick="make_activityPlay(textContent)">7</span>
            </div>
            <div style="grid-column:1/2; grid-row:5/6;">
                <span class="tt_bttn" onclick="make_activityPlay(textContent)">8</span>                
                <span class="tt_bttn" onclick="make_activityPlay(textContent)">9</span>
                <span class="tt_bttn" onclick="make_activityPlay(textContent)">10</span>
                <span class="tt_bttn" onclick="make_activityPlay(textContent)">11</span>
            </div>
            <div style="grid-column:1/2; grid-row:7/8;">                
                <span class="tt_bttn" onclick="make_activityPlay(textContent)">12</span>
                <span class="tt_bttn" onclick="make_activityPlay(textContent)">13</span>
                <span class="tt_bttn" onclick="make_activityPlay(textContent)">mixed</span>
            </div>
        </div>
    </div>

</div>
`;

document.getElementById('full_activity_menu').innerHTML = fullActivityMenu;

activityList = document.querySelectorAll('.activity');
activityList.forEach( (activity) => { document.getElementById(activity.id).textContent = activityName[activity.id]; });

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
 
function showEg(id) { document.getElementById('tableNum_selection').style.display = 'none';
    
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
        }, 700);
    }
}

function clearEg() {  onNewActivity = false;
    setTimeout( () => { 
        if (onNewActivity == false) { document.getElementById('preview_background').style.display = 'none'; }
    }, 500);
} 

function clearImmediate() { document.getElementById('preview_background').style.display = 'none'; onNewActivity = false; }

let tt_div_task;

function display_tableNum(id) { tt_div_task = id;                               console.log('IN display_tableNum: id = '+tt_div_task);
    onNewActivity = false;
    document.getElementById('preview_background').style.display = 'none';
    document.getElementById('tableNum_selection').style.display = 'block';
}

function make_activityPlay(tableNum) {                                          console.log(tableNum);
    if (tt_div_task == 'tt_hard_click_question' && tableNum == 0) { console.log('Can NOT run tt_hard_click_question with tableNum = 0'); }
    else { activityPlay(tt_div_task+'TT'+tableNum); }
}