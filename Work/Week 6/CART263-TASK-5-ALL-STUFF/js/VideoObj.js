class VideoObj {
  constructor(x, y, w, h, videoElement, context) {
    this.videoElement = videoElement;
    this.context = context;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.shapeX = 10;
    this.shapeY = 10;
    this.shapeCol = "#000000";
    this.userProvidedSepia = 0;
    this.userProvidedHue = 0;
    this.userProvidedBlur = 0;
    this.userProvidedInvert = 0;

    let filterButton_blur = document.getElementById("filter_button_blur");
    let blurInput = document.getElementById("blurnum");

    let filterButton_sepia = document.getElementById("filter_button_sepia");
    let sepiaInput = document.getElementById("sepianum");

    let filterButton_hue = document.getElementById("filter_button_hue");
    let hueInput = document.getElementById("huenum");

    let filterButton_invert = document.getElementById("filter_button_invert");
    let invertInput = document.getElementById("invertnum");

    let self = this;

    filterButton_blur.addEventListener("click", function () {
      //get value from input field
      self.userProvidedBlur = blurInput.value;
      console.log(self.userProvidedBlur);
    });

    filterButton_sepia.addEventListener("click", function () {

      self.userProvidedSepia = sepiaInput.value;
      console.log(self.userProvidedSepia)
    });

    filterButton_hue.addEventListener("click", function () {
      //get value from input field
      self.userProvidedHue = hueInput.value;
      console.log(self.userProvidedHue)
    });

    filterButton_invert.addEventListener("click", function () {
      //get value from input field
      self.userProvidedInvert = invertInput.value;
      console.log(self.userProvidedInvert)
    });
  }

  display() {
    this.context.save();
    this.context.filter = `blur(${this.userProvidedBlur}px)`;
    this.context.filter += `sepia(${this.userProvidedSepia}%)`;
    this.context.filter += `hue-rotate(${this.userProvidedHue}deg)`;
    this.context.filter += `invert(${this.userProvidedInvert}%)`;
    this.context.drawImage(this.videoElement, this.x, this.y, this.w, this.h);
    this.context.fillStyle = this.shapeCol;
    this.context.fillRect(this.shapeX, this.shapeY, 50, 50)
    this.context.restore();
  }



  //called when rectangle color is to be updated
  changeColor(newCol) {


  }
  //called when rectangle Pos is to be updated
  updatePositionRect(mx, my) {
    /** FILL IN */
  }
  //called when rectangle Pos is to be updated
  updatePositionRect(e) {
    /** FILL IN */
    if (!this.canvas) return;

    let mx = e.clientX - this.canvas.getBoundingClientRect().left;
    let my = e.clientY - this.canvas.getBoundingClientRect().top;

    this.shapeX = mx - 25;
    this.shapeY = my - 25;
    this.render();
  }
  clickCanvas(e) {
    this.shapeCol = this.shapeCol === "#000000" ? this.newCol : "#000000";
    console.log("rectangle color change to:", this.shapeCol);
    this.render();
  }
  addMouseMoveListener() {
    if (!this.canvas) return;
    this.canvas.addEventListener("mousemove", (e) => this.updatePositionRect(e));
  }
  addClickListener() {
    if (!this.canvas) return;
    this.canvas.addEventListener("click", (e) => this.clickCanvas(e));
  }
  render() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.display();
  }

  update(videoElement) {
    this.videoElement = videoElement;
  }
}


