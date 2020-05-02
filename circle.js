class Circle{
    TEXT_SPACING = 15;

    constructor(timesNumber, modular, centerX, centerY, dia){
        this.centerX = centerX;
        this.centerY = centerY;

        this.diameter = dia;
        this.radius = dia/2;

        this.timesNumber = timesNumber;
        this.modular = modular;

        this.DEGREE_INCREMENT = 360/(this.modular);
        this.DEGREE_REF_POINT = [-this.radius,0];

        this.render();
    }

    render(){
        push();
            translate(this.centerX, this.centerY);
            ellipse(0,0,this.diameter, this.diameter);

            for(let i=0; i<this.modular; i+=1){

                //render point labels
                this.renderPointLabels(i);
                
                //draw connecting lines based on times
                this.drawModularLines(i)
            }
        pop();
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

        stroke('red');
        strokeWeight(0.1);
        line(startPoint[0],startPoint[1],destPoint[0],destPoint[1]);
    }
}