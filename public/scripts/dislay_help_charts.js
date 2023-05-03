function bttn_1_help() {

    document.querySelectorAll(".help_scripts").forEach( (script) => { script.remove(); });

    let help_display_script = document.createElement("script");                 // <script></script>
    
    help_display_script.src = "/scripts/"+help_script_1+".js";                  // <script src="/scripts/helpChart_BIDMAS.js"></script>
    
    help_display_script.classList.add('help_scripts');                          // <script src="/scripts/helpChart_BIDMAS.js" class="help_scripts"></script>
    
    document.body.append(help_display_script);

    setTimeout( () => { window['run_'+help_script_1](); }, 600);                // window.run_helpChart_BIDMAS();  window['run_helpChart_BIDMAS']();
}

function bttn_2_help() {
    
    document.querySelectorAll(".help_scripts").forEach( (script) => { script.remove(); });

    let help_display_script = document.createElement("script");     
    help_display_script.src = "/scripts/"+help_script_2+".js";
    help_display_script.classList.add('help_scripts');
    document.body.append(help_display_script);  
    
    setTimeout( () => { window['run_'+help_script_2](); }, 600);  
}

function bttn_3_help() {

    document.querySelectorAll(".help_scripts").forEach( (script) => { script.remove(); });
    
    let help_display_script = document.createElement("script");     
    help_display_script.src = "/scripts/"+help_script_3+".js";
    help_display_script.classList.add('help_scripts');
    document.body.append(help_display_script);
    
    setTimeout( () => { window['run_'+help_script_3](); }, 600);  
}