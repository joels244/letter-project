const message = `I don’t even know if you’ll ever read this.\nBut if you do… I just want you to know, i love you and i want you to know about it.\n\n I don't know where to start, but I always think about you, always want to try for you, and I want you to see me as there for you.\n\n You know? I always pray for you, I don't want anything big from you, I just want you to see me and look at me like the person you love.\n\nAnyway, I hope you're doing okay, even though we’re not in each other’s lives anymore.`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}

