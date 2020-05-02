class Circle{


    constructor(timesNumber, modular, centerX, centerY, dia, render=true){
        this.centerX = centerX;
        this.centerY = centerY;

        this.diameter = dia;
        this.radius = dia/2;

        this.timesNumber = timesNumber;
        this.modular = modular;

        this.DEGREE_REF_POINT = [-this.radius,0];
        this.startModularValue=0;

        this.TEXT_SPACING = 15;
        this.COLORS = ['red','green', 'blue', 'black', 'magenta'];
        this.SELECTED_COLOR=null;

        if(render){
            this.render();
        }
    }

    render(){
        this.DEGREE_INCREMENT = 360/(this.modular);

        push();
            translate(this.centerX, this.centerY);
            ellipse(0,0,this.diameter, this.diameter);

            for(let i=this.startModularValue; i<this.modular; i+=1){

                //render point labels
                this.renderPointLabels(i);
                
                //draw connecting lines based on times
                this.drawModularLines(i)
            }
        pop();
        this.renderTitle();
    }

    calculateNthPointCoordinate(n){
        let theta = 180+ (n*this.DEGREE_INCREMENT);
        let x = this.radius * cos(theta);
        let y = this.radius * sin(theta);
        return [x,y];
    }

    renderPointLabels(n){
        push();
            noStroke();
            textSize(7)
            rotate(n*this.DEGREE_INCREMENT)
            text(round(n,1),-this.radius-this.TEXT_SPACING,0)
        pop();
    }

    drawModularLines(n){
        let product = n * this.timesNumber;
        let destN = product % this.modular; //taking modular to have number rotate through modular limit
        let startPoint = this.calculateNthPointCoordinate(n);
        let destPoint = this.calculateNthPointCoordinate(destN);

        stroke(this.getRandomColor(this.timesNumber));
        strokeWeight(0.1);
        line(startPoint[0],startPoint[1],destPoint[0],destPoint[1]);
    }

    getRandomColor(n){
        this.SELECTED_COLOR = this.COLORS[n % this.COLORS.length];
        return this.SELECTED_COLOR;
    }

    renderTitle(){
        push()
            translate(this.centerX-this.radius,this.centerY-this.radius)
            fill(this.SELECTED_COLOR);
            circle(0,0,this.radius*0.2);
            fill("white")
            textSize(this.radius*0.1);
            textAlign(CENTER,CENTER);
            text(this.timesNumber,0,0);
        pop()
    }

    setTimesNumber(num,render=true){
        this.timesNumber = num;
        if(render){
            this.render();
        }
    }

    setModular(num,render=true){
        this.modular = num;
        if(render){
            this.render();
        }
    }

    renderSpokes(i){
        this.DEGREE_INCREMENT = 360/(this.modular);

        push();
            translate(this.centerX, this.centerY);
            if(i % this.modular == 0){
                this.timesNumber++;
                ellipse(0,0,this.diameter, this.diameter);
            }
            //draw connecting lines based on times
            this.drawModularLines(i)
        pop();

        this.renderTitle();

    }
}