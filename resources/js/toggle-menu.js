function toggleMenu(){
    const burgerAnimation = document.getElementById("burger");
    const navigation = document.getElementById("nav");
    burgerAnimation.classList.toggle("clicked");
    navigation.classList.toggle("opened");

}