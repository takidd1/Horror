$(".continue").hide();
$(".entr").hide();
$(".option1").hide();
$(".option2").hide();
$(".reply-yes").click(function() {  
    $(".reply-main").text("You drive to Mark’s House.");
    $(".reply-main").css("background-color", "");
    $(".reply-yes").css("background-color", "gray");
    $("body").css("background-color", "gray");
    $("body").css("background", "url(https://www.color-name.com/color-image?c=4B4E53&squaredata:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEWAgIB7e3vCwsLIyMjPz8/V1dV4eHjc3Nzj4+PMzMzt7e1zc3O/v7/////39/fx8fHg4ODJbms7AAABaElEQVR4nO3dSWrDABBFQcm2PMkZ7n/aaJFNiCEmZOBJVSf4b9/Qw9Pzy/V8Pp8W0+Lw7rL/YPd9+y9dDo+YHnH65DpM8/Ge8S/dXfAz5tswHYc1G3cK65bCg8I2hX0K+xT2KexT2LcUXsb/HvGrlsK9wjaFfQr7FPYp7FPYp7BPYZ/CPoV9CvsU9insU9insE9h3yYKdwrbFPYp7FPYp7BPYZ/CPoV9CvsU9insU9insE9hn8I+hX0K+xT2KexT2LeJiyGFcQr7FPYp7FPYp7BPYZ/CPoV9CvsU9insU9insE9hn8I+hX0K+xT2baJw/T9K1v9nRmGcwj6FfQr7FPYp7FPYp7BPYZ/CPoV9CvsU9insU9insE9hn8K+pXBS2KawT2Gfwj6FfQr7FPYp7FPYp7BPYZ/CPoV9CvsU9insU9insG8ThSeFbQr7FPYp7FPYp7BPYZ/Cvm0UzuOazbfhetut2e31DZx9EnazzT4gAAAAAElFTkSuQmCC)");
    $(".huh").attr("src", "https://lh3.googleusercontent.com/yqJwmbSALhrxpcf87UIB3oU2J9XkKoG6N_OwY-WWcaOYe2q6gzP3o_pr2kwoQx-2PTXX=s170");
    $(".reply-yes").hide();
    $(".reply-no").text("Choose to quit...");
 $(".continue").show();
}); 



$(".reply-no").click(function() {  
      $(".reply-main").text("You win! But mark doesn't...");
    $(".reply-main").css("background-color", "red");
    $(".reply-no").css("background-color", "gray");
    $(".huh").attr("src", "https://lh3.googleusercontent.com/q0B74vT0iotYRE6LDfKVyLx-AMIfsrfxhq-5JkWAP-ZvzuiSwS1PlpBkko5IWjSlE758MA=s85");
    $("body").css("background", "url(https://freight.cargo.site/t/original/i/3188f12e08a3c9b733a6e176967631e87189869d109fc8a1c85219203a39398d/Screen-Shot-2020-02-07-at-11.16.50-AM.png)");
    $(".reply-yes").hide();
    $(".reply-no").text("=>");
    $(".entr").hide();
    $(".option1").hide();
$(".option2").hide();
    $(".continue").hide();
});
    
$(".continue").click(function() {    
    $(".reply-main").text(" You go into the house, and check the cameras. While you check Bedroom Camera 3, you see a door open.");
    $(".reply-main").css("background-color", "");
    $(".huh").attr("src", "https://lh3.googleusercontent.com/64brf-whFMTJvY9rQJixBo9MLSrER21vm3dF9MazHSLH9mHypPKCvPP1PKSDj4HuPjfjN7E=s120");
    $(".entr").text("Enter the room.");
    $(".continue").hide();
    $(".entr").show();
    
    
    
});

$(".entr").click(function() {
$(".reply-main").text("While entering the room, you turn around and see this thing. What do you do?");
   $(".huh").attr("src", "https://pbs.twimg.com/media/FA9ffSDUcAcyilV.jpg");
    $(".option1").show();
    $(".option2").show();
    $(".entr").hide();
    
    
});

