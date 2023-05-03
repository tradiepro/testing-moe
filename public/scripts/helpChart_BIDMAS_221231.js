document.getElementById('help_chart_display').innerHTML = '';
document.getElementById('help_chart_display').innerHTML = `

    <style>
        .modalTt { display:none; z-index:1; height:380px; text-align:center; font-size:30px; background-color:grey; }
        #displayTt { display:none; width:920px; height:300px; background-color:white;
            text-align:center; font-size:4rem; justify-content:center; transform:translate(0px,0px); }
        #ttHelp { text-align: center; width: 920px; margin-top:10px; }
        .bold{ font-weight:bold; font-size: 30px;  }
        .prime{ background-color: lightpink !important; }
        table { overflow:hidden; background:white; border-collapse:collapse; border-color:black; }
        th, td { border:2px solid black; border-collapse:collapse; overflow:hidden; padding:3px 0px; width:60px; }
        #ttHelp th { background-color: #E40B27; color: white; width:60px; }
        #ttHelp td, #ttHelp th { position: relative; outline: 0; }
    </style>
    
    <div id="ttHelpParent" class="modalTt">
        <div id="ttHelp" >

            <span style="font-size:40px;">B I D M A S</span>

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