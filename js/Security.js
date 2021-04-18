class Security {

    constructor(){
        this.box1 = createInput("").attribute("placeholder", "Code1");
        this.box2 = createInput("").attribute("placeholder", "Code2");
        this.box3 = createInput("").attribute("placeholder", "Code3");
        // Add code to create the input and button elements
        this.button1 = createButton("Check");
        this.button2 = createButton("Check");
        this.button3 = createButton("Check");
    }

    display(){
        this.box1.position(100, 95);
        this.box2.position(700, 195);
        this.box3.position(100, 295);
        this.button1.position(100, 120);
        this.button2.position(700, 220);
        this.button3.position(100, 320);
        this.button1.mousePressed(()=>{
            val1 = this.box1.value();
            if(val1 === "VARIABLE"){
                score += 1;
                this.box1.hide();
                this.button1.hide();
            }
        });
        this.button2.mousePressed(()=>{
            val2 = this.box2.value();
            if(val2 === "FUNCTION"){
                score += 1;
                this.box2.hide();
                this.button2.hide();
            }
        });
        this.button3.mousePressed(()=>{
            val3 = this.box3.value();
            
            if(val3 === "DATABASE"){
                score += 1;
                this.box3.hide();
                this.button3.hide();
            }
        });
        // Add code to make the buttons function as expected


    }
}