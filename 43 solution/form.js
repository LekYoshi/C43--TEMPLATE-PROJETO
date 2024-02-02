class Form {
  constructor() {
    this.input = createInput("Digite seu nome");
    this.message = createInput("Digite uma mensagem");
    this.submitButton = createImg("submit.png")
    this.greeting = createElement("h2")
  }
  display() {
    this.input.position(590, 200);
    this.input.class("customInput");


    this.message.position(100, 130);
    this.message.class("customInputBox");


    this.submitButton.position(280, 355);


    //crie o botão
    this.submitButton.class("customButton")
  }

  end() {
    this.submitButton.mousePressed(() => {
      this.input.hide();
      this.message.hide();
      this.submitButton.hide();
      friend.name = this.input.value()
      friend.message = this.message.value()
      playerCount = +1
      friend.index = playerCount
      console.log(playerCount)
      friend.updateCount(friend.index)
      friend.addFriends()
      this.greeting.html("Obrigado(a) por sua mensagem");
      this.greeting.class("Até mais")
      this.greeting.position(150, 105);
      var closebutton = createImg("close.png")
      closebutton.size(150, 80);
      closebutton.position(280, 355);
      closebutton.mousePressed(() => {
        this.greeting.hide();
        page.update(1);
        window.location.reload();
      })
    })
  }
}