class RectangularObj {
  constructor(x, y, w, h, f_color, s_color, context) {
    // We write instructions to set up a Flower here
    // Position and size information
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.fill_color = f_color;
    this.stroke_color = s_color;
    this.startAngle = 0;
    this.endAngle = Math.PI * 2; //full rotation
    this.context = context;
  }

  display() {
    this.context.fillStyle = this.fill_color; // change the color we are using
    this.context.fillRect(this.x, this.y, this.width, this.height);
    this.context.strokeStyle = this.stroke_color; // change the color we are using
    this.context.lineWidth = 2; //change stroke
    this.context.strokeRect(this.x, this.y, this.width, this.height);
  }

  /**
   * 
   * Added changes 
   * 
   */
  update() {
    // // Animation: Slight horizontal movement
    // this.x += Math.sin(Date.now() * 0.002) * 2;

    // // Change rectangle properties based on microphone volume
    // this.width = 50 + this.volume * 300; // Width increases with sound
    // this.fill_color = `rgb(${Math.min(this.volume * 500, 255)}, 50, 150)`; // Color reacts to sound
    this.x += Math.sin(Date.now() * 0.002) * 2;

    // Make color shift **more dramatic**
    let red = Math.min(this.volume * 800, 255);  // Higher boost for red
    let green = Math.min(this.volume * 500, 255); // Moderate green boost
    let blue = Math.min(this.volume * 1000, 255); // Higher boost for blue

    this.fill_color = `rgb(${red}, ${green}, ${blue})`; // Dynamic color change
    this.width = 50 + this.volume * 300; // Width still reacts to sound
  }

  setVolume(vol) {
    this.volume = vol; // Update volume from microphone
  }
}