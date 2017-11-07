var slideShow = {
    photoList: [
                "fish.jpeg",
                "panda.jpeg",
                "wolf.png",
                "elephant.jpg",
                "stork.png",
                "MANTISSHRIMP.jpeg"
              ],
    currentPhotoIndex: 2,
    nextPhoto: function() {
        if (this.currentPhotoIndex < this.photoList.length){
          this.currentPhotoIndex += 1;
          console.log(this.photoList[this.currentPhotoIndex]);
        } else {
          this.currentPhotoIndex = 0;
          console.log("end of slideshow");
        }
    },
    prevPhoto: function() {
      if (this.currentPhotoIndex != 0) {
        this.currentPhotoIndex -= 1;
        console.log(this.photoList[this.currentPhotoIndex]);
      } else {
        this.currentPhotoIndex = this.photoList.length;
        console.log("MANTIS SHRIMP");
      }
    },
    getCurrentPhoto: function() {
      console.log(this.photoList[this.currentPhotoIndex]);
    }
};

slideShow.getCurrentPhoto();
slideShow.nextPhoto();
slideShow.nextPhoto();
slideShow.nextPhoto();
slideShow.prevPhoto();
slideShow.nextPhoto();
