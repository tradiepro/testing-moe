document.getElementById('help_chart_display').innerHTML = '';
document.getElementById('help_chart_display').innerHTML = `

    <style>
        .modalTt { display:none; z-index:1; height:380px; text-align:center; font-size:30px; }
        #displayTt { display:none; width:920px; height:300px; background-color:white; text-align:center;
                     font-size: 4rem; justify-content: center; transform: translate(0px,0px); }
        #ttHelp { text-align:center; width:920px; margin-top:10px; }
        .bold{ font-weight:bold; font-size: 30px;  }
        table { overflow:hidden; background:white; border-collapse:collapse; border-color:black; }
        th, td { border:2px solid black; border-collapse:collapse; overflow:hidden; padding:3px 0px; width:60px; }
        #ttHelp th { background-color: #E40B27; color: white; width:60px; }
        #ttHelp td, #ttHelp th { position: relative; outline: 0; }
    </style>
    
    <div id="ttHelpParent" class="modalTt">
        <table id="ttHelp" >
            <tbody>
                <tr>
                    <td id="cell_id@0+1" class="R0 C1" onmouseover="highLight(id)">1</td><td id="cell_id@0+2" class="R0 C2" onmouseover="highLight(id)">2</td>
                    <td id="cell_id@0+3" class="R0 C3" onmouseover="highLight(id)">3</td><td id="cell_id@0+4" class="R0 C4" onmouseover="highLight(id)">4</td>
                    <td id="cell_id@0+5" class="R0 C5" onmouseover="highLight(id)">5</td><td id="cell_id@0+6" class="R0 C6" onmouseover="highLight(id)">6</td>
                    <td id="cell_id@0+7" class="R0 C7" onmouseover="highLight(id)">7</td><td id="cell_id@0+8" class="R0 C8" onmouseover="highLight(id)">8</td>
                    <td id="cell_id@0+9" class="R0 C9" onmouseover="highLight(id)">9</td><td id="cell_id@0+10" class="R0 C10 bold" onmouseover="highLight(id)">10</td>
                </tr>
                <tr>
                    <td id="cell_id@10+1" class="R10 C1" onmouseover="highLight(id)">11</td><td id="cell_id@10+2" class="R10 C2" onmouseover="highLight(id)">12</td>
                    <td id="cell_id@10+3" class="R10 C3" onmouseover="highLight(id)">13</td><td id="cell_id@10+4" class="R10 C4" onmouseover="highLight(id)">14</td>
                    <td id="cell_id@10+5" class="R10 C5" onmouseover="highLight(id)">15</td><td id="cell_id@10+6" class="R10 C6" onmouseover="highLight(id)">16</td>
                    <td id="cell_id@10+7" class="R10 C7" onmouseover="highLight(id)">17</td><td id="cell_id@10+8" class="R10 C8" onmouseover="highLight(id)">18</td>
                    <td id="cell_id@10+9" class="R10 C9" onmouseover="highLight(id)">19</td><td id="cell_id@10+10" class="R10 C10 bold" onmouseover="highLight(id)">20</td>
                </tr>
                <tr>
                    <td id="cell_id@20+1" class="R20 C1" onmouseover="highLight(id)">21</td><td id="cell_id@20+2" class="R20 C2" onmouseover="highLight(id)">22</td>
                    <td id="cell_id@20+3" class="R20 C3" onmouseover="highLight(id)">23</td><td id="cell_id@20+4" class="R20 C4" onmouseover="highLight(id)">24</td>
                    <td id="cell_id@20+5" class="R20 C5" onmouseover="highLight(id)">25</td><td id="cell_id@20+6" class="R20 C6" onmouseover="highLight(id)">26</td>
                    <td id="cell_id@20+7" class="R20 C7" onmouseover="highLight(id)">27</td><td id="cell_id@20+8" class="R20 C8" onmouseover="highLight(id)">28</td>
                    <td id="cell_id@20+9" class="R20 C9" onmouseover="highLight(id)">29</td><td id="cell_id@20+10" class="R20 C10 bold" onmouseover="highLight(id)">30</td>
                </tr>
                <tr>
                    <td id="cell_id@30+1" class="R30 C1" onmouseover="highLight(id)">31</td><td id="cell_id@30+2" class="R30 C2" onmouseover="highLight(id)">32</td>
                    <td id="cell_id@30+3" class="R30 C3" onmouseover="highLight(id)">33</td><td id="cell_id@30+4" class="R30 C4" onmouseover="highLight(id)">34</td>
                    <td id="cell_id@30+5" class="R30 C5" onmouseover="highLight(id)">35</td><td id="cell_id@30+6" class="R30 C6" onmouseover="highLight(id)">36</td>
                    <td id="cell_id@30+7" class="R30 C7" onmouseover="highLight(id)">37</td><td id="cell_id@30+8" class="R30 C8" onmouseover="highLight(id)">38</td>
                    <td id="cell_id@30+9" class="R30 C9" onmouseover="highLight(id)">39</td><td id="cell_id@30+10" class="R30 C10 bold" onmouseover="highLight(id)">40</td>
                </tr>
                <tr>
                    <td id="cell_id@40+1" class="R40 C1" onmouseover="highLight(id)">41</td><td id="cell_id@40+2" class="R40 C2" onmouseover="highLight(id)">42</td>
                    <td id="cell_id@40+3" class="R40 C3" onmouseover="highLight(id)">43</td><td id="cell_id@40+4" class="R40 C4" onmouseover="highLight(id)">44</td>
                    <td id="cell_id@40+5" class="R40 C5" onmouseover="highLight(id)">45</td><td id="cell_id@40+6" class="R40 C6" onmouseover="highLight(id)">46</td>
                    <td id="cell_id@40+7" class="R40 C7" onmouseover="highLight(id)">47</td><td id="cell_id@40+8" class="R40 C8" onmouseover="highLight(id)">48</td>
                    <td id="cell_id@40+9" class="R40 C9" onmouseover="highLight(id)">49</td><td id="cell_id@40+10" class="R40 C10 bold" onmouseover="highLight(id)">50</td>
                </tr>
                <tr>
                    <td id="cell_id@50+1" class="R50 C1" onmouseover="highLight(id)">51</td><td id="cell_id@50+2" class="R50 C2" onmouseover="highLight(id)">52</td>
                    <td id="cell_id@50+3" class="R50 C3" onmouseover="highLight(id)">53</td><td id="cell_id@50+4" class="R50 C4" onmouseover="highLight(id)">54</td>
                    <td id="cell_id@50+5" class="R50 C5" onmouseover="highLight(id)">55</td><td id="cell_id@50+6" class="R50 C6" onmouseover="highLight(id)">56</td>
                    <td id="cell_id@50+7" class="R50 C7" onmouseover="highLight(id)">57</td><td id="cell_id@50+8" class="R50 C8" onmouseover="highLight(id)">58</td>
                    <td id="cell_id@50+9" class="R50 C9" onmouseover="highLight(id)">59</td><td id="cell_id@50+10" class="R50 C10 bold" onmouseover="highLight(id)">60</td>
                </tr>
                <tr>
                    <td id="cell_id@60+1" class="R60 C1" onmouseover="highLight(id)">61</td><td id="cell_id@60+2" class="R60 C2" onmouseover="highLight(id)">62</td>
                    <td id="cell_id@60+3" class="R60 C3" onmouseover="highLight(id)">63</td><td id="cell_id@60+4" class="R60 C4" onmouseover="highLight(id)">64</td>
                    <td id="cell_id@60+5" class="R60 C5" onmouseover="highLight(id)">65</td><td id="cell_id@60+6" class="R60 C6" onmouseover="highLight(id)">66</td>
                    <td id="cell_id@60+7" class="R60 C7" onmouseover="highLight(id)">67</td><td id="cell_id@60+8" class="R60 C8" onmouseover="highLight(id)">68</td>
                    <td id="cell_id@60+9" class="R60 C9" onmouseover="highLight(id)">69</td><td id="cell_id@60+10" class="R60 C10 bold" onmouseover="highLight(id)">70</td>
                </tr>
                <tr>
                    <td id="cell_id@70+1" class="R70 C1" onmouseover="highLight(id)">71</td><td id="cell_id@70+2" class="R70 C2" onmouseover="highLight(id)">72</td>
                    <td id="cell_id@70+3" class="R70 C3" onmouseover="highLight(id)">73</td><td id="cell_id@70+4" class="R70 C4" onmouseover="highLight(id)">74</td>
                    <td id="cell_id@70+5" class="R70 C5" onmouseover="highLight(id)">75</td><td id="cell_id@70+6" class="R70 C6" onmouseover="highLight(id)">76</td>
                    <td id="cell_id@70+7" class="R70 C7" onmouseover="highLight(id)">77</td><td id="cell_id@70+8" class="R70 C8" onmouseover="highLight(id)">78</td>
                    <td id="cell_id@70+9" class="R70 C9" onmouseover="highLight(id)">79</td><td id="cell_id@70+10" class="R70 C10 bold" onmouseover="highLight(id)">80</td>
                </tr>
                <tr>
                    <td id="cell_id@80+1" class="R80 C1" onmouseover="highLight(id)">81</td><td id="cell_id@80+2" class="R80 C2" onmouseover="highLight(id)">82</td>
                    <td id="cell_id@80+3" class="R80 C3" onmouseover="highLight(id)">83</td><td id="cell_id@80+4" class="R80 C4" onmouseover="highLight(id)">84</td>
                    <td id="cell_id@80+5" class="R80 C5" onmouseover="highLight(id)">85</td><td id="cell_id@80+6" class="R80 C6" onmouseover="highLight(id)">86</td>
                    <td id="cell_id@80+7" class="R80 C7" onmouseover="highLight(id)">87</td><td id="cell_id@80+8" class="R80 C8" onmouseover="highLight(id)">88</td>
                    <td id="cell_id@80+9" class="R80 C9" onmouseover="highLight(id)">89</td><td id="cell_id@80+10" class="R80 C10 bold" onmouseover="highLight(id)">90</td>
                </tr>
                <tr>
                    <td id="cell_id@90+1" class="R90 C1" onmouseover="highLight(id)">91</td><td id="cell_id@90+2" class="R90 C2" onmouseover="highLight(id)">92</td>
                    <td id="cell_id@90+3" class="R90 C3" onmouseover="highLight(id)">93</td><td id="cell_id@90+4" class="R90 C4" onmouseover="highLight(id)">94</td>
                    <td id="cell_id@90+5" class="R90 C5" onmouseover="highLight(id)">95</td><td id="cell_id@90+6" class="R90 C6" onmouseover="highLight(id)">96</td>
                    <td id="cell_id@90+7" class="R90 C7" onmouseover="highLight(id)">97</td><td id="cell_id@90+8" class="R90 C8" onmouseover="highLight(id)">98</td>
                    <td id="cell_id@90+9" class="R90 C9" onmouseover="highLight(id)">99</td><td id="cell_id@90+10" class="R90 C10 bold" onmouseover="highLight(id)">100</td>
                </tr>
            </tbody>
        </table>
    
        <div id="displayTt">
          <h1 ><span id="rowFactor" style="color: #0151FF;"></span>&nbsp;x&nbsp;
          <span id="colFactor" style="color: #0151FF;"></span>&nbsp;=&nbsp;
          <span id="ttVal" style="color: #E40B27;"></span></h1>
        </div>
    </div>
`;

window.current_cell;  window.current_row;  window.current_col;  window.previous_cell;  window.previous_row;  window.previous_col;
window.currentPathCells = [];  window.touchClicked = 'none';  window.mouseClicked = 'none'; 

function run_helpChart_hundreds_chart() {      // open modal //
    document.getElementById("ttHelpParent").style.display = "block";
    document.getElementById('close_help_btn').style.display = 'block';
}

document.addEventListener("touchstart", touch_start, { passive: false } );
function touch_start(event) {
    current_cell = document.elementFromPoint(event.touches[0].clientX, event.touches[0].clientY).id;    
    if (current_cell.split('@')[0] != 'cell_id') return;
    event.preventDefault();
    touchClicked = 'yes';
    currentPathCells = [];
    highLight(current_cell);    
}

document.addEventListener("mousedown", mouse_down, { passive: false } );
function mouse_down(event) {
    current_cell = document.elementFromPoint(event.clientX, event.clientY).id;    
    if (current_cell.split('@')[0] != 'cell_id') return;
    event.preventDefault();
    mouseClicked = 'yes';
    currentPathCells = [];
    highLight(current_cell);    
}

document.addEventListener("touchmove", touch_move, { passive: false } );
function touch_move(event) {
    current_cell = document.elementFromPoint(event.touches[0].clientX, event.touches[0].clientY).id;    
    if (current_cell.split('@')[0] != 'cell_id') return;
    event.preventDefault();
    if (current_cell != previous_cell) { highLight(current_cell); }    
}

function highLight(current_cell) {
    for (let i = 0; i < 10; i++) { 
        for (let i = 0; i < 10; i++) { 
            document.querySelectorAll(`.R${10*i}`).forEach(element => { if (element.classList.contains("clicked")===false) element.style.backgroundColor = "white"; });
            document.querySelectorAll(`.C${i+1}`).forEach(element => { if (element.classList.contains("clicked")===false) element.style.backgroundColor = "white"; });
        }
    }
    current_row = current_cell.split('@')[1].split('+')[0];  current_col = current_cell.split('@')[1].split('+')[1];
    if (mouseClicked == "yes" || touchClicked == "yes") {
        if (currentPathCells.includes(document.getElementById(current_cell)) === false) {
            if (document.getElementById(current_cell).classList.contains("clicked") === true) {
                document.getElementById(current_cell).classList.remove("clicked");
                document.getElementById(current_cell).style.backgroundColor = "white";
            } else {
                document.getElementById(current_cell).classList.add("clicked");
                document.getElementById(current_cell).style.backgroundColor = "green";
                currentPathCells.push(document.getElementById(current_cell));
            }
        }
    } else {
        if (document.getElementById(current_cell).classList.contains("clicked") === false) {
        document.getElementById(current_cell).style.backgroundColor = "orange"; }
    }
    previous_cell = current_cell;
}

document.addEventListener("touchend", touch_end, { passive: false } );
function touch_end(event) {
    if (current_cell.split('@')[0] != 'cell_id') return;
    if (touchClicked == 'yes') { touchClicked == 'no'; }    
}

document.addEventListener("mouseup", mouse_up, { passive: false } );
function mouse_up(event) {
    if (current_cell.split('@')[0] != 'cell_id') return;
    if (mouseClicked == 'yes') { mouseClicked = 'no'; }    
}

function closeTable() {
    for (let i = 0; i < 10; i++) { 
        for (let i = 0; i < 10; i++) { 
            document.querySelectorAll(`.R${10*i}`).forEach(element => { 
                element.classList.remove("clicked");
                element.style.backgroundColor = "white"; });
            document.querySelectorAll(`.C${i+1}`).forEach(element => { 
                element.classList.remove("clicked");
                element.style.backgroundColor = "white"; });
        }
    }
    setTimeout( () => {  
        document.getElementById('ttHelp').style.display = "none";
        document.getElementById('displayTt').style.display = "none";
        document.getElementById('close_help_btn').style.display = 'none';
    
        document.removeEventListener("touchstart", touch_start, { passive: false } );
        document.removeEventListener("mousedown", mouse_down, { passive: false } );
        document.removeEventListener("touchmove", touch_move, { passive: false } );
        document.removeEventListener("touchend", touch_end, { passive: false } );
        document.removeEventListener("mouseup", mouse_up, { passive: false } );

        document.querySelectorAll(".help_scripts").forEach( (script) => { script.remove(); });
    }, 800);
}