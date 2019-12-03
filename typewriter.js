sentence = "hello there from lighthouse labs\n";

function typewriter() {
  for (let i =0; i < sentence.length; i++) {
    setTimeout(() => {
      process.stdout.write(sentence[i])// print the char here
    }, i * 1000) // 
  }
}
 typewriter("hello there from");