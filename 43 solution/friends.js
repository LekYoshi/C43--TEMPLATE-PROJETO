class Friends {
  constructor() {
    this.name = "",
      this.message = " ",
      this.index = 0;

  }
  getCount() {

    database.ref("friendCount").on("value", (data) => {
      playerCount = data.val();
      console.log(playerCount);
    })

  }

  updateCount(count) {

    database.ref("/").update({
      friendCount: count
    })

  }



  Friends() {
 friend = data.val()
 console.log(friend)

  }
}
