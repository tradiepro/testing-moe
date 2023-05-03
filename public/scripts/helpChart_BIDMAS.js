document.getElementById('help_chart_display').innerHTML = '';
document.getElementById('help_chart_display').innerHTML = `

    <style>
        .modalTt { display:none; z-index:1; height:380px; text-align:center; font-size:30px; background-color:white; margin-top:10px;}
        #ttHelp { text-align:center; width:920px; margin-top:10px; }
        .bidmasContainer {display:flex; text-align:center; justify-content:space-around; align-items:center; transform:translate(250px,30px);
                            color:slateblue; width:25rem; border-radius:25px; border:4px solid slateblue; margin-top:0px;}
        .b {color: #e6261f;}
        .i {color: #eb7532;}
        .d {color: #f7d038;}
        .m {color:#a3e048;}
        .a {color:#34bbe6;}
        .s{color: #d23be7;}
    </style>
    
    <div id="ttHelpParent" class="modalTt">
        <div id="ttHelp" >
            <div class="bidmasContainer">
                <div>
                    <h1 class="b">B</h1>
                    <h2 class="b">( )</h2>
                </div>
                <div>
                    <h1 class="i">I</h1>
                    <h2 class="i">x²</h2>
                </div>
                <div>
                   <h1 class="d">D</h1>
                   <h2 class="d">÷</h2>
                </div>
                <div>
                    <h1 class="m">M</h1>
                    <h2 class="m">×</h2>
                </div>
                <div>
                    <h1 class="a">A</h1>
                    <h2 class="a">+</h2>
                </div>
                <div>
                     <h1 class="s">S</h1>
                     <h2 class="s">−</h2>
                </div>
            </div>
        </div>
    </div>
`;

function run_helpChart_BIDMAS() { // open modal //
    document.getElementById("ttHelpParent").style.display = "block";
    document.getElementById('close_help_btn').style.display = 'block';
}

function closeTable() {
    setTimeout( () => {
        document.getElementById('ttHelp').style.display = "none";
        document.getElementById('close_help_btn').style.display = 'none';
    
        document.querySelectorAll(".help_scripts").forEach( (script) => { script.remove(); });
    }, 800);
}
