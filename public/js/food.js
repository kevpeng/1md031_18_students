function MenuItem(name, kCal, gluten, lactose, imageLink) {
    this.name = name;
    this.kCal = kCal;
    this.gluten = gluten;
    this.lactose = lactose;
    this.imageLink = imageLink;

    this.health = function() {
        return this.name + ' ' + this.kCal;
    };
}


var food = [
    new MenuItem("Chicken Burger", 1500, true, true, "http://3.bp.blogspot.com/-hcIXU5dX6n0/VnK4mIBsbOI/AAAAAAAAANE/0WLpskQjCOA/s1600/5ac178b0-86da-4e6f-b71f-ff6dbce633ae.jpg"),
    new MenuItem("King Burger", 1000, true, true, "https://moadrupalweb.blob.core.windows.net/moadrupalweb/original/5571_BurgerKing_HeroImage.jpg"),
    new MenuItem("Air Burger", 0, false, false, "https://upload.wikimedia.org/wikipedia/commons/1/18/Color-white.JPG")
]


