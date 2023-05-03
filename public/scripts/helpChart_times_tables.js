document.getElementById('help_chart_display').innerHTML = '';
document.getElementById('help_chart_display').innerHTML = `

    <style>
        .modalTt { display:none; z-index:1; height:380px; text-align:center; font-size:20px; }
        #displayTt { display:none; width:920px; height:300px; background-color:white; 
                    text-align:center; font-size:4rem; justify-content:center; transform:translate(0px,0px); }
        #ttHelp { text-align:center; width:920px; margin-top:10px; }
        .bold{ font-weight:bold; font-size:22px;  }
        table { overflow:hidden; background:white; border-collapse:collapse; border-color:black; }
        th, td { border:2px solid black; border-collapse:collapse; overflow:hidden; padding:3px 0px; }
        #ttHelp th { background-color:#E40B27; color:white; width:60px; }
        #ttHelp td, #ttHelp th { position:relative; outline:0; }
    </style>
    
    <div id="ttHelpParent" class="modalTt">
        <table id="ttHelp" >
            <thead>
                <tr>
                    <th>x</th><th id="C0">0</th><th id="C1">1</th><th id="C2">2</th><th id="C3">3</th><th id="C4">4</th><th id="C5">5</th><th id="C6">6</th>
                    <th id="C7">7</th><th id="C8">8</th><th id="C9">9</th><th id="C10">10</th><th id="C11">11</th><th id="C12">12</th><th id="C13">13</th>
                </tr>
            </thead>
            <tbody>
                <tr><th id="R0">0</th>
                    <td id="cell_id@0x0" class="R0 C0 bold" onmouseover="highLight(id)">0</td><td id="cell_id@0x1" class="R0 C1" onmouseover="highLight(id)">0</td>
                    <td id="cell_id@0x2" class="R0 C2" onmouseover="highLight(id)">0</td><td id="cell_id@0x3" class="R0 C3" onmouseover="highLight(id)">0</td>
                    <td id="cell_id@0x4" class="R0 C4" onmouseover="highLight(id)">0</td><td id="cell_id@0x5" class="R0 C5" onmouseover="highLight(id)">0</td>
                    <td id="cell_id@0x6" class="R0 C6" onmouseover="highLight(id)">0</td><td id="cell_id@0x7" class="R0 C7" onmouseover="highLight(id)">0</td>
                    <td id="cell_id@0x8" class="R0 C8" onmouseover="highLight(id)">0</td><td id="cell_id@0x9" class="R0 C9" onmouseover="highLight(id)">0</td>
                    <td id="cell_id@0x10" class="R0 C10" onmouseover="highLight(id)">0</td><td id="cell_id@0x11" class="R0 C11" onmouseover="highLight(id)">0</td>
                    <td id="cell_id@0x12" class="R0 C12" onmouseover="highLight(id)">0</td><td id="cell_id@0x13" class="R0 C13" onmouseover="highLight(id)">0</td>
                </tr>
                <tr><th id="R1">1</th>
                    <td id="cell_id@1x0" class="R1 C0" onmouseover="highLight(id)">0</td><td id="cell_id@1x1" class="R1 C1 bold" onmouseover="highLight(id)">1</td>
                    <td id="cell_id@1x2" class="R1 C2" onmouseover="highLight(id)">2</td><td id="cell_id@1x3" class="R1 C3" onmouseover="highLight(id)">3</td>
                    <td id="cell_id@1x4" class="R1 C4" onmouseover="highLight(id)">4</td><td id="cell_id@1x5" class="R1 C5" onmouseover="highLight(id)">5</td>
                    <td id="cell_id@1x6" class="R1 C6" onmouseover="highLight(id)">6</td><td id="cell_id@1x7" class="R1 C7" onmouseover="highLight(id)">7</td>
                    <td id="cell_id@1x8" class="R1 C8" onmouseover="highLight(id)">8</td><td id="cell_id@1x9" class="R1 C9" onmouseover="highLight(id)">9</td>
                    <td id="cell_id@1x10" class="R1 C10" onmouseover="highLight(id)">10</td><td id="cell_id@1x11" class="R1 C11" onmouseover="highLight(id)">11</td>
                    <td id="cell_id@1x12" class="R1 C12" onmouseover="highLight(id)">12</td><td id="cell_id@1x13" class="R1 C13" onmouseover="highLight(id)">13</td>
                </tr>
                <tr><th id="R2">2</th>
                    <td id="cell_id@2x0" class="R2 C0" onmouseover="highLight(id)">0</td><td id="cell_id@2x1" class="R2 C1" onmouseover="highLight(id)">2</td>
                    <td id="cell_id@2x2" class="R2 C2 bold" onmouseover="highLight(id)">4</td><td id="cell_id@2x3" class="R2 C3" onmouseover="highLight(id)">6</td>
                    <td id="cell_id@2x4" class="R2 C4" onmouseover="highLight(id)">8</td><td id="cell_id@2x5" class="R2 C5" onmouseover="highLight(id)">10</td>
                    <td id="cell_id@2x6" class="R2 C6" onmouseover="highLight(id)">12</td><td id="cell_id@2x7" class="R2 C7" onmouseover="highLight(id)">14</td>
                    <td id="cell_id@2x8" class="R2 C8" onmouseover="highLight(id)">16</td><td id="cell_id@2x9" class="R2 C9" onmouseover="highLight(id)">18</td>
                    <td id="cell_id@2x10" class="R2 C10" onmouseover="highLight(id)">20</td><td id="cell_id@2x11" class="R2 C11" onmouseover="highLight(id)">22</td>
                    <td id="cell_id@2x12" class="R2 C12" onmouseover="highLight(id)">24</td><td id="cell_id@2x13" class="R2 C13" onmouseover="highLight(id)">26</td>
                </tr>
                <tr><th id="R3">3</th>
                    <td id="cell_id@3x0" class="R3 C0" onmouseover="highLight(id)">0</td><td id="cell_id@3x1" class="R3 C1" onmouseover="highLight(id)">3</td>
                    <td id="cell_id@3x2" class="R3 C2" onmouseover="highLight(id)">6</td><td id="cell_id@3x3" class="R3 C3 bold" onmouseover="highLight(id)">9</td>
                    <td id="cell_id@3x4" class="R3 C4" onmouseover="highLight(id)">12</td><td id="cell_id@3x5" class="R3 C5" onmouseover="highLight(id)">15</td>
                    <td id="cell_id@3x6" class="R3 C6" onmouseover="highLight(id)">18</td><td id="cell_id@3x7" class="R3 C7" onmouseover="highLight(id)">21</td>
                    <td id="cell_id@3x8" class="R3 C8" onmouseover="highLight(id)">24</td><td id="cell_id@3x9" class="R3 C9" onmouseover="highLight(id)">27</td>
                    <td id="cell_id@3x10" class="R3 C10" onmouseover="highLight(id)">30</td><td id="cell_id@3x11" class="R3 C11" onmouseover="highLight(id)">33</td>
                    <td id="cell_id@3x12" class="R3 C12" onmouseover="highLight(id)">36</td><td id="cell_id@3x13" class="R3 C13" onmouseover="highLight(id)">39</td>
                </tr>
                <tr><th id="R4">4</th>
                    <td id="cell_id@4x0" class="R4 C0" onmouseover="highLight(id)">0</td><td id="cell_id@4x1" class="R4 C1" onmouseover="highLight(id)">4</td>
                    <td id="cell_id@4x2" class="R4 C2" onmouseover="highLight(id)">8</td><td id="cell_id@4x3" class="R4 C3" onmouseover="highLight(id)">12</td>
                    <td id="cell_id@4x4" class="R4 C4 bold" onmouseover="highLight(id)">16</td><td id="cell_id@4x5" class="R4 C5" onmouseover="highLight(id)">20</td>
                    <td id="cell_id@4x6" class="R4 C6" onmouseover="highLight(id)">24</td><td id="cell_id@4x7" class="R4 C7" onmouseover="highLight(id)">28</td>
                    <td id="cell_id@4x8" class="R4 C8" onmouseover="highLight(id)">32</td><td id="cell_id@4x9" class="R4 C9" onmouseover="highLight(id)">36</td>
                    <td id="cell_id@4x10" class="R4 C10" onmouseover="highLight(id)">40</td><td id="cell_id@4x11" class="R4 C11" onmouseover="highLight(id)">44</td>
                    <td id="cell_id@4x12" class="R4 C12" onmouseover="highLight(id)">48</td><td id="cell_id@4x13" class="R4 C13" onmouseover="highLight(id)">52</td>
                </tr>
                <tr><th id="R5">5</th>
                    <td id="cell_id@5x0" class="R5 C0" onmouseover="highLight(id)">0</td><td id="cell_id@5x1" class="R5 C1" onmouseover="highLight(id)">5</td>
                    <td id="cell_id@5x2" class="R5 C2" onmouseover="highLight(id)">10</td><td id="cell_id@5x3" class="R5 C3" onmouseover="highLight(id)">15</td>
                    <td id="cell_id@5x4" class="R5 C4" onmouseover="highLight(id)">20</td><td id="cell_id@5x5" class="R5 C5 bold" onmouseover="highLight(id)">25</td>
                    <td id="cell_id@5x6" class="R5 C6" onmouseover="highLight(id)">30</td><td id="cell_id@5x7" class="R5 C7" onmouseover="highLight(id)">35</td>
                    <td id="cell_id@5x8" class="R5 C8" onmouseover="highLight(id)">40</td><td id="cell_id@5x9" class="R5 C9" onmouseover="highLight(id)">45</td>
                    <td id="cell_id@5x10" class="R5 C10" onmouseover="highLight(id)">50</td><td id="cell_id@5x11" class="R5 C11" onmouseover="highLight(id)">55</td>
                    <td id="cell_id@5x12" class="R5 C12" onmouseover="highLight(id)">60</td><td id="cell_id@5x13" class="R5 C13" onmouseover="highLight(id)">65</td>
                </tr>
                <tr><th id="R6">6</th>
                    <td id="cell_id@6x0" class="R6 C0" onmouseover="highLight(id)">0</td><td id="cell_id@6x1" class="R6 C1" onmouseover="highLight(id)">6</td>
                    <td id="cell_id@6x2" class="R6 C2" onmouseover="highLight(id)">12</td><td id="cell_id@6x3" class="R6 C3" onmouseover="highLight(id)">18</td>
                    <td id="cell_id@6x4" class="R6 C4" onmouseover="highLight(id)">24</td><td id="cell_id@6x5" class="R6 C5" onmouseover="highLight(id)">30</td>
                    <td id="cell_id@6x6" class="R6 C6 bold" onmouseover="highLight(id)">36</td><td id="cell_id@6x7" class="R6 C7" onmouseover="highLight(id)">42</td>
                    <td id="cell_id@6x8" class="R6 C8" onmouseover="highLight(id)">48</td><td id="cell_id@6x9" class="R6 C9" onmouseover="highLight(id)">54</td>
                    <td id="cell_id@6x10" class="R6 C10" onmouseover="highLight(id)">60</td><td id="cell_id@6x11" class="R6 C11" onmouseover="highLight(id)">66</td>
                    <td id="cell_id@6x12" class="R6 C12" onmouseover="highLight(id)">72</td><td id="cell_id@6x13" class="R6 C13" onmouseover="highLight(id)">78</td>
                </tr>
                <tr><th id="R7">7</th>
                    <td id="cell_id@7x0" class="R7 C0" onmouseover="highLight(id)">0</td><td id="cell_id@7x1" class="R7 C1" onmouseover="highLight(id)">7</td>
                    <td id="cell_id@7x2" class="R7 C2" onmouseover="highLight(id)">14</td><td id="cell_id@7x3" class="R7 C3" onmouseover="highLight(id)">21</td>
                    <td id="cell_id@7x4" class="R7 C4" onmouseover="highLight(id)">28</td><td id="cell_id@7x5" class="R7 C5" onmouseover="highLight(id)">35</td>
                    <td id="cell_id@7x6" class="R7 C6" onmouseover="highLight(id)">42</td><td id="cell_id@7x7" class="R7 C7 bold" onmouseover="highLight(id)">49</td>
                    <td id="cell_id@7x8" class="R7 C8" onmouseover="highLight(id)">56</td><td id="cell_id@7x9" class="R7 C9" onmouseover="highLight(id)">63</td>
                    <td id="cell_id@7x10" class="R7 C10" onmouseover="highLight(id)">70</td><td id="cell_id@7x11" class="R7 C11" onmouseover="highLight(id)">77</td>
                    <td id="cell_id@7x12" class="R7 C12" onmouseover="highLight(id)">84</td><td id="cell_id@7x13" class="R7 C13" onmouseover="highLight(id)">91</td>
                </tr>
                <tr><th id="R8">8</th>
                    <td id="cell_id@8x0" class="R8 C0" onmouseover="highLight(id)">0</td><td id="cell_id@8x1" class="R8 C1" onmouseover="highLight(id)">8</td>
                    <td id="cell_id@8x2" class="R8 C2" onmouseover="highLight(id)">16</td><td id="cell_id@8x3" class="R8 C3" onmouseover="highLight(id)">24</td>
                    <td id="cell_id@8x4" class="R8 C4" onmouseover="highLight(id)">32</td><td id="cell_id@8x5" class="R8 C5" onmouseover="highLight(id)">40</td>
                    <td id="cell_id@8x6" class="R8 C6" onmouseover="highLight(id)">48</td><td id="cell_id@8x7" class="R8 C7" onmouseover="highLight(id)">56</td>
                    <td id="cell_id@8x8" class="R8 C8 bold" onmouseover="highLight(id)">64</td><td id="cell_id@8x9" class="R8 C9" onmouseover="highLight(id)">72</td>
                    <td id="cell_id@8x10" class="R8 C10" onmouseover="highLight(id)">80</td><td id="cell_id@8x11" class="R8 C11" onmouseover="highLight(id)">88</td>
                    <td id="cell_id@8x12" class="R8 C12" onmouseover="highLight(id)">96</td><td id="cell_id@8x13" class="R8 C13" onmouseover="highLight(id)">104</td>
                </tr>
                <tr><th id="R9">9</th>
                    <td id="cell_id@9x0" class="R9 C0" onmouseover="highLight(id)">0</td><td id="cell_id@9x1" class="R9 C1" onmouseover="highLight(id)">9</td>
                    <td id="cell_id@9x2" class="R9 C2" onmouseover="highLight(id)">18</td><td id="cell_id@9x3" class="R9 C3" onmouseover="highLight(id)">27</td>
                    <td id="cell_id@9x4" class="R9 C4" onmouseover="highLight(id)">36</td><td id="cell_id@9x5" class="R9 C5" onmouseover="highLight(id)">45</td>
                    <td id="cell_id@9x6" class="R9 C6" onmouseover="highLight(id)">54</td><td id="cell_id@9x7" class="R9 C7" onmouseover="highLight(id)">63</td>
                    <td id="cell_id@9x8" class="R9 C8" onmouseover="highLight(id)">72</td><td id="cell_id@9x9" class="R9 C9 bold" onmouseover="highLight(id)">81</td>
                    <td id="cell_id@9x10" class="R9 C10" onmouseover="highLight(id)">90</td><td id="cell_id@9x11" class="R9 C11" onmouseover="highLight(id)">99</td>
                    <td id="cell_id@9x12" class="R9 C12" onmouseover="highLight(id)">108</td><td id="cell_id@9x13" class="R9 C13" onmouseover="highLight(id)">117</td>
                </tr>
                <tr><th id="R10">10</th>
                    <td id="cell_id@10x0" class="R10 C0" onmouseover="highLight(id)">0</td><td id="cell_id@10x1" class="R10 C1" onmouseover="highLight(id)">10</td>
                    <td id="cell_id@10x2" class="R10 C2" onmouseover="highLight(id)">20</td><td id="cell_id@10x3" class="R10 C3" onmouseover="highLight(id)">30</td>
                    <td id="cell_id@10x4" class="R10 C4" onmouseover="highLight(id)">40</td><td id="cell_id@10x5" class="R10 C5" onmouseover="highLight(id)">50</td>
                    <td id="cell_id@10x6" class="R10 C6" onmouseover="highLight(id)">60</td> <td id="cell_id@10x7" class="R10 C7" onmouseover="highLight(id)">70</td>
                    <td id="cell_id@10x8" class="R10 C8" onmouseover="highLight(id)">80</td><td id="cell_id@10x9" class="R10 C9" onmouseover="highLight(id)">90</td>
                    <td id="cell_id@10x10" class="R10 C10 bold" onmouseover="highLight(id)">100</td><td id="cell_id@10x11" class="R10 C11" onmouseover="highLight(id)">110</td>
                    <td id="cell_id@10x12" class="R10 C12" onmouseover="highLight(id)">120</td><td id="cell_id@10x13" class="R10 C13" onmouseover="highLight(id)">130</td>
                </tr>
                <tr><th id="R11">11</th>
                    <td id="cell_id@11x0" class="R11 C0" onmouseover="highLight(id)">0</td><td id="cell_id@11x1" class="R11 C1" onmouseover="highLight(id)">11</td>
                    <td id="cell_id@11x2" class="R11 C2" onmouseover="highLight(id)">22</td><td id="cell_id@11x3" class="R11 C3" onmouseover="highLight(id)">33</td>
                    <td id="cell_id@11x4" class="R11 C4" onmouseover="highLight(id)">44</td><td id="cell_id@11x5" class="R11 C5" onmouseover="highLight(id)">55</td>
                    <td id="cell_id@11x6" class="R11 C6" onmouseover="highLight(id)">66</td><td id="cell_id@11x7" class="R11 C7" onmouseover="highLight(id)">77</td>
                    <td id="cell_id@11x8" class="R11 C8" onmouseover="highLight(id)">88</td><td id="cell_id@11x9" class="R11 C9" onmouseover="highLight(id)">99</td>
                    <td id="cell_id@11x10" class="R11 C10" onmouseover="highLight(id)">110</td><td id="cell_id@11x11" class="R11 C11 bold" onmouseover="highLight(id)">121</td>
                    <td id="cell_id@11x12" class="R11 C12" onmouseover="highLight(id)">132</td><td id="cell_id@11x13" class="R11 C13" onmouseover="highLight(id)">143</td>
                </tr>
                <tr><th id="R12">12</th>
                    <td id="cell_id@12x0" class="R12 C0" onmouseover="highLight(id)">0</td><td id="cell_id@12x1" class="R12 C1" onmouseover="highLight(id)">12</td>
                    <td id="cell_id@12x2" class="R12 C2" onmouseover="highLight(id)">24</td><td id="cell_id@12x3" class="R12 C3" onmouseover="highLight(id)">36</td>
                    <td id="cell_id@12x4" class="R12 C4" onmouseover="highLight(id)">48</td><td id="cell_id@12x5" class="R12 C5" onmouseover="highLight(id)">60</td>
                    <td id="cell_id@12x6" class="R12 C6" onmouseover="highLight(id)">72</td><td id="cell_id@12x7" class="R12 C7" onmouseover="highLight(id)">84</td>
                    <td id="cell_id@12x8" class="R12 C8" onmouseover="highLight(id)">96</td><td id="cell_id@12x9" class="R12 C9" onmouseover="highLight(id)">108</td>
                    <td id="cell_id@12x10" class="R12 C10" onmouseover="highLight(id)">120</td><td id="cell_id@12x11" class="R12 C11" onmouseover="highLight(id)">132</td>
                    <td id="cell_id@12x12" class="R12 C12 bold" onmouseover="highLight(id)">144</td><td id="cell_id@12x13" class="R12 C13" onmouseover="highLight(id)">156</td>
                </tr>
                <tr><th id="R13">13</th>
                    <td id="cell_id@13x0" class="R13 C0" onmouseover="highLight(id)">0</td><td id="cell_id@13x1" class="R13 C1" onmouseover="highLight(id)">13</td>
                    <td id="cell_id@13x2" class="R13 C2" onmouseover="highLight(id)">26</td><td id="cell_id@13x3" class="R13 C3" onmouseover="highLight(id)">39</td>
                    <td id="cell_id@13x4" class="R13 C4" onmouseover="highLight(id)">52</td><td id="cell_id@13x5" class="R13 C5" onmouseover="highLight(id)">65</td>
                    <td id="cell_id@13x6" class="R13 C6" onmouseover="highLight(id)">78</td><td id="cell_id@13x7" class="R13 C7" onmouseover="highLight(id)">91</td>
                    <td id="cell_id@13x8" class="R13 C8" onmouseover="highLight(id)">106</td><td id="cell_id@13x9" class="R13 C9" onmouseover="highLight(id)">117</td>
                    <td id="cell_id@13x10" class="R13 C10" onmouseover="highLight(id)">130</td><td id="cell_id@13x11" class="R13 C11" onmouseover="highLight(id)">143</td>
                    <td id="cell_id@13x12" class="R13 C12" onmouseover="highLight(id)">156</td><td id="cell_id@13x13" class="R13 C13 bold" onmouseover="highLight(id)">169</td>
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

function run_helpChart_times_tables() {      // open modal //
    document.getElementById("ttHelpParent").style.display = "block";
    document.getElementById('ttHelp').style.display = "block";
    document.getElementById('close_help_btn').style.display = 'block';
}

document.addEventListener("touchstart", touch_start, { passive: false } );
function touch_start(event) {
    current_cell = document.elementFromPoint(event.touches[0].clientX, event.touches[0].clientY).id;    
    if (current_cell.split('@')[0] != 'cell_id') return;
    event.preventDefault();
    highLight(current_cell);
    touchClicked = 'yes';
    setTimeout( ()=>{ touchClicked = 'no'; }, 200);    
}

document.addEventListener("touchmove", touch_move, { passive: false } );
function touch_move(event) {
    current_cell = document.elementFromPoint(event.touches[0].clientX, event.touches[0].clientY).id;
    if (current_cell.split('@')[0] != 'cell_id') return;
    event.preventDefault();
    highLight(current_cell);    
}

function highLight(thisCell) { current_cell = thisCell;
    for (let i = 0; i < 14; i++) { 
        document.getElementById('R'+i).style.backgroundColor = "red";  
        document.getElementById('C'+i).style.backgroundColor = "red";
        for (let i = 0; i < 14; i++) { 
            document.querySelectorAll('.R'+i).forEach(element => { element.style.backgroundColor = "white"; });
            document.querySelectorAll('.C'+i).forEach(element => { element.style.backgroundColor = "white"; });
        }
    }
    current_row = current_cell.split('@')[1].split('x')[0];  current_col = current_cell.split('@')[1].split('x')[1];

    document.querySelectorAll('.R'+current_row).forEach(element => { element.style.backgroundColor = "pink"; });
    document.querySelectorAll('.C'+current_col).forEach(element => { element.style.backgroundColor = "pink"; });
    document.getElementById(current_cell).style.backgroundColor = "orange";
    document.getElementById('R'+current_row).style.backgroundColor = "purple";
    document.getElementById('C'+current_col).style.backgroundColor = "purple";
}

document.addEventListener("mouseup", mouse_up, { passive: false } );
function mouse_up(event) { 
    current_cell = event.target.id;
    if (current_cell.split('@')[0] != 'cell_id') return;
    displaySelectedTt(current_cell);
}

document.addEventListener("touchend", touch_end, { passive: false } );
function touch_end(event) {
    if (current_cell.split('@')[0] != 'cell_id') return;
    if (touchClicked == 'yes') { touchClicked == 'no'; displaySelectedTt(current_cell); }
}

function displaySelectedTt(current_cell) { // close ttHelp and present the display screen with a set timeout

    document.getElementById('rowFactor').textContent = current_cell.split('@')[1].split('x')[0];
    document.getElementById('colFactor').textContent = current_cell.split('@')[1].split('x')[1];
    document.getElementById('ttVal').textContent = document.getElementById(current_cell).textContent;

    setTimeout( ()=>{ document.getElementById('ttHelp').style.display = "none"; document.getElementById('displayTt').style.display = "flex"; }, 500);
    setTimeout(closeTable, 2000);    
}

function closeTable() {
    document.getElementById('ttHelp').style.display = "none";
    document.getElementById('displayTt').style.display = "none";
    document.getElementById('close_help_btn').style.display = 'none';

    document.removeEventListener("touchstart", touch_start, { passive: false } );
    document.removeEventListener("touchmove", touch_move, { passive: false } );
    document.removeEventListener("touchend", touch_end, { passive: false } );
    document.removeEventListener("mouseup", mouse_up, { passive: false } );
    
    document.querySelectorAll(".help_scripts").forEach( (script) => { script.remove(); });
}