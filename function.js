console.log("HOla");
let htmlX = "";

const lavadora = {
  power: false,
  waterLevel: 1,
  watchingLevel: 1,
  watchingTime: 0,
  enjuague: 0,
  lavar: false,
};
let water = false;
let dry = false;
let time = false;
let enjuague = false;

const component = document.getElementById("encender");

  const nivel1 = document.getElementById("nivel1");
  const nivel2 = document.getElementById("nivel2");
  const nivel3 = document.getElementById("nivel3");
  const nivel4 = document.getElementById("nivel4");
  const nivel5 = document.getElementById("nivel5");

  const lavado1 = document.getElementById("lavado1");
  const lavado2 = document.getElementById("lavado2");
  const lavado3 = document.getElementById("lavado3");
  const lavado4 = document.getElementById("lavado4");
  const lavado5 = document.getElementById("lavado5");

  const time1 = document.getElementById("time1");
  const time2 = document.getElementById("time2");
  const time3 = document.getElementById("time3");
  const time4 = document.getElementById("time4");
  const time5 = document.getElementById("time5");

  const enjuague1 = document.getElementById("enjuague1");
  const enjuague2 = document.getElementById("enjuague2");
  const enjuague3 = document.getElementById("enjuague3");

  const lavar = document.getElementById("lavar");

  const btn1 = document.getElementById("watter");
  const btn2 = document.getElementById("dry");
  const btn3 = document.getElementById("time");
  const btn4 = document.getElementById("enjuague");
  const btn5 = document.getElementById("watch");

function encender() {
  
  if (lavadora.power) {
    console.log(lavadora.power);
    console.log(component);
    if (component.classList.contains("text-bg-success")) {
      component.classList.remove("text-bg-success");
      component.classList.add("text-bg-secondary");

      lavado1.classList.remove("text-bg-success");
      lavado1.classList.add("text-bg-secondary");
      lavado4.classList.remove("text-bg-success");
      lavado4.classList.add("text-bg-secondary");
      lavado2.classList.remove("text-bg-success");
      lavado2.classList.add("text-bg-secondary");
      lavado3.classList.remove("text-bg-success");
      lavado3.classList.add("text-bg-secondary");
      lavado5.classList.remove("text-bg-success");
      lavado5.classList.add("text-bg-secondary");

      nivel1.classList.remove("text-bg-success");
      nivel1.classList.add("text-bg-secondary");
      nivel4.classList.remove("text-bg-success");
      nivel4.classList.add("text-bg-secondary");
      nivel2.classList.remove("text-bg-success");
      nivel2.classList.add("text-bg-secondary");
      nivel3.classList.remove("text-bg-success");
      nivel3.classList.add("text-bg-secondary");
      nivel5.classList.remove("text-bg-success");
      nivel5.classList.add("text-bg-secondary");

      time1.classList.remove("text-bg-success");
      time1.classList.add("text-bg-secondary");
      time4.classList.remove("text-bg-success");
      time4.classList.add("text-bg-secondary");
      time2.classList.remove("text-bg-success");
      time2.classList.add("text-bg-secondary");
      time3.classList.remove("text-bg-success");
      time3.classList.add("text-bg-secondary");

      enjuague1.classList.remove("text-bg-success");
      enjuague1.classList.add("text-bg-secondary");
      enjuague2.classList.remove("text-bg-success");
      enjuague2.classList.add("text-bg-secondary");
      enjuague3.classList.remove("text-bg-success");
      enjuague3.classList.add("text-bg-secondary");

      lavar.classList.remove("text-bg-success");
      lavar.classList.add("text-bg-secondary");

      btn1.classList.add("disabled");
      btn2.classList.add("disabled");
      btn3.classList.add("disabled");
      btn4.classList.add("disabled");
      btn5.classList.add("disabled");
    }
    lavadora.power = false;
    console.log("Entra a la función");
    console.log(component);
  } else {
    console.log(lavadora.power);
    if (component.classList.contains("text-bg-secondary")) {
      component.classList.remove("text-bg-secondary");
      component.classList.add("text-bg-success");
      nivel1.classList.remove("text-bg-secondary");
      nivel1.classList.add("text-bg-success");
      lavado1.classList.remove("text-bg-secondary");
      lavado1.classList.add("text-bg-success");
      time1.classList.remove("text-bg-secondary");
      time1.classList.add("text-bg-success");
      enjuague1.classList.remove("text-bg-secondary");
      enjuague1.classList.add("text-bg-success");

      btn1.classList.remove("disabled");
      btn2.classList.remove("disabled");
      btn3.classList.remove("disabled");
      btn4.classList.remove("disabled");
      btn5.classList.remove("disabled");
    }

    lavadora.power = true;
    console.log("Entra a la función");
    console.log(component);
  }
}

function nivelAgua() {
  console.log("Va a ir al if");
  if (!water) {
    if (lavadora.waterLevel >= 0 && lavadora.waterLevel < 5) {
      console.log("Primer nivel del agua");
      console.log(lavadora.waterLevel);
      lavadora.waterLevel++;
      console.log("Segundo nivel del agua");
      console.log(lavadora.waterLevel);
    } else {
      lavadora.waterLevel--;
      water = true;
    }
  } else {
    console.log("Primer nivel del agua");
    console.log(lavadora.waterLevel);
    lavadora.waterLevel--;
    console.log("Segundo nivel del agua");
    console.log(lavadora.waterLevel);
    if (lavadora.waterLevel == 1) water = false;
  }

  console.log(lavadora.waterLevel);
  switch (lavadora.waterLevel) {
    case 1:
      if (nivel1.classList.contains("text-bg-secondary")) {
        nivel1.classList.remove("text-bg-secondary");
        nivel1.classList.add("text-bg-success");

        nivel4.classList.remove("text-bg-success");
        nivel4.classList.add("text-bg-secondary");
        nivel2.classList.remove("text-bg-success");
        nivel2.classList.add("text-bg-secondary");
        nivel3.classList.remove("text-bg-success");
        nivel3.classList.add("text-bg-secondary");
        nivel5.classList.remove("text-bg-success");
        nivel5.classList.add("text-bg-secondary");
      }
      break;
    case 2:
      if (nivel2.classList.contains("text-bg-secondary")) {
        console.log(nivel2);
        nivel1.classList.remove("text-bg-success");
        nivel1.classList.add("text-bg-secondary");
        nivel2.classList.remove("text-bg-secondary");
        nivel2.classList.add("text-bg-success");

        nivel1.classList.remove("text-bg-success");
        nivel1.classList.add("text-bg-secondary");
        nivel4.classList.remove("text-bg-success");
        nivel4.classList.add("text-bg-secondary");
        nivel3.classList.remove("text-bg-success");
        nivel3.classList.add("text-bg-secondary");
        nivel5.classList.remove("text-bg-success");
        nivel5.classList.add("text-bg-secondary");
      }
      break;
    case 3:
      if (nivel3.classList.contains("text-bg-secondary")) {
        console.log(nivel3);
        nivel2.classList.remove("text-bg-success");
        nivel2.classList.add("text-bg-secondary");
        nivel3.classList.remove("text-bg-secondary");
        nivel3.classList.add("text-bg-success");

        nivel1.classList.remove("text-bg-success");
        nivel1.classList.add("text-bg-secondary");
        nivel2.classList.remove("text-bg-success");
        nivel2.classList.add("text-bg-secondary");
        nivel4.classList.remove("text-bg-success");
        nivel4.classList.add("text-bg-secondary");
        nivel5.classList.remove("text-bg-success");
        nivel5.classList.add("text-bg-secondary");
      }
      break;
    case 4:
      if (nivel4.classList.contains("text-bg-secondary")) {
        console.log(nivel4);
        nivel3.classList.remove("text-bg-success");
        nivel3.classList.add("text-bg-secondary");
        nivel4.classList.remove("text-bg-secondary");
        nivel4.classList.add("text-bg-success");
        nivel1.classList.remove("text-bg-success");
        nivel1.classList.add("text-bg-secondary");
        nivel2.classList.remove("text-bg-success");
        nivel2.classList.add("text-bg-secondary");
        nivel3.classList.remove("text-bg-success");
        nivel3.classList.add("text-bg-secondary");
        nivel5.classList.remove("text-bg-success");
        nivel5.classList.add("text-bg-secondary");
      }
      break;
    case 5:
      if (nivel5.classList.contains("text-bg-secondary")) {
        console.log(nivel5);
        nivel4.classList.remove("text-bg-success");
        nivel4.classList.add("text-bg-secondary");
        nivel5.classList.remove("text-bg-secondary");
        nivel5.classList.add("text-bg-success");

        nivel1.classList.remove("text-bg-success");
        nivel1.classList.add("text-bg-secondary");
        nivel2.classList.remove("text-bg-success");
        nivel2.classList.add("text-bg-secondary");
        nivel3.classList.remove("text-bg-success");
        nivel3.classList.add("text-bg-secondary");
        nivel4.classList.remove("text-bg-success");
        nivel4.classList.add("text-bg-secondary");
      }
      break;
  }
}

function nivelLavado() {
  console.log("Va a ir al if");
  if (!dry) {
    if (lavadora.watchingLevel < 5) {
      console.log("Primer nivel del agua");
      console.log(lavadora.watchingLevel);
      lavadora.watchingLevel++;
      console.log("Segundo nivel del agua");
      console.log(lavadora.watchingLevel);
    } else {
      lavadora.watchingLevel--;
      dry = true;
    }
  } else {
    console.log("Primer nivel del agua");
    console.log(lavadora.watchingLevel);
    lavadora.watchingLevel--;
    console.log("Segundo nivel del agua");
    console.log(lavadora.watchingLevel);
    if (lavadora.watchingLevel == 1) dry = false;
  }

  console.log(lavadora.watchingLevel);
  switch (lavadora.watchingLevel) {
    case 1:
      if (lavado1.classList.contains("text-bg-secondary")) {
        lavado1.classList.remove("text-bg-secondary");
        lavado1.classList.add("text-bg-success");
        lavado4.classList.remove("text-bg-success");
        lavado4.classList.add("text-bg-secondary");
        lavado2.classList.remove("text-bg-success");
        lavado2.classList.add("text-bg-secondary");
        lavado3.classList.remove("text-bg-success");
        lavado3.classList.add("text-bg-secondary");
        lavado5.classList.remove("text-bg-success");
        lavado5.classList.add("text-bg-secondary");
      }
      break;
    case 2:
      if (lavado2.classList.contains("text-bg-secondary")) {
        console.log(lavado2);
        lavado1.classList.remove("text-bg-success");
        lavado1.classList.add("text-bg-secondary");
        lavado2.classList.remove("text-bg-secondary");
        lavado2.classList.add("text-bg-success");
        lavado3.classList.remove("text-bg-success");
        lavado3.classList.add("text-bg-secondary");
        lavado4.classList.remove("text-bg-success");
        lavado4.classList.add("text-bg-secondary");
        lavado5.classList.remove("text-bg-success");
        lavado5.classList.add("text-bg-secondary");
        lavado1.classList.remove("text-bg-success");
        lavado1.classList.add("text-bg-secondary");
      }
      break;
    case 3:
      if (lavado3.classList.contains("text-bg-secondary")) {
        console.log(lavado3);
        lavado2.classList.remove("text-bg-success");
        lavado2.classList.add("text-bg-secondary");
        lavado3.classList.remove("text-bg-secondary");
        lavado3.classList.add("text-bg-success");

        lavado4.classList.remove("text-bg-success");
        lavado4.classList.add("text-bg-secondary");
        lavado2.classList.remove("text-bg-success");
        lavado2.classList.add("text-bg-secondary");
        lavado1.classList.remove("text-bg-success");
        lavado1.classList.add("text-bg-secondary");
        lavado5.classList.remove("text-bg-success");
        lavado5.classList.add("text-bg-secondary");
      }
      break;
    case 4:
      if (lavado4.classList.contains("text-bg-secondary")) {
        console.log(lavado4);
        lavado3.classList.remove("text-bg-success");
        lavado3.classList.add("text-bg-secondary");
        lavado4.classList.remove("text-bg-secondary");
        lavado4.classList.add("text-bg-success");

        lavado1.classList.remove("text-bg-success");
        lavado1.classList.add("text-bg-secondary");
        lavado2.classList.remove("text-bg-success");
        lavado2.classList.add("text-bg-secondary");
        lavado3.classList.remove("text-bg-success");
        lavado3.classList.add("text-bg-secondary");
        lavado5.classList.remove("text-bg-success");
        lavado5.classList.add("text-bg-secondary");
      }
      break;
    case 5:
      if (lavado5.classList.contains("text-bg-secondary")) {
        console.log(lavado5);
        lavado4.classList.remove("text-bg-success");
        lavado4.classList.add("text-bg-secondary");
        lavado5.classList.remove("text-bg-secondary");
        lavado5.classList.add("text-bg-success");

        lavado4.classList.remove("text-bg-success");
        lavado4.classList.add("text-bg-secondary");
        lavado2.classList.remove("text-bg-success");
        lavado2.classList.add("text-bg-secondary");
        lavado3.classList.remove("text-bg-success");
        lavado3.classList.add("text-bg-secondary");
        lavado1.classList.remove("text-bg-success");
        lavado1.classList.add("text-bg-secondary");
      }
      break;
  }
}

function levelTime() {
  console.log("Va a ir al if");
  if (!time) {
    if (lavadora.watchingTime < 4) {
      console.log("Primer nivel del agua");
      console.log(lavadora.watchingTime);
      lavadora.watchingTime++;
      console.log("Segundo nivel del agua");
      console.log(lavadora.watchingTime);
    } else {
      lavadora.watchingTime--;
      time = true;
    }
  } else {
    console.log("Primer nivel del agua");
    console.log(lavadora.watchingTime);
    lavadora.watchingTime--;
    console.log("Segundo nivel del agua");
    console.log(lavadora.watchingTime);
  }

  console.log(lavadora.watchingTime);
  switch (lavadora.watchingTime) {
    case 1:
      if (time1.classList.contains("text-bg-secondary")) {
        time1.classList.remove("text-bg-secondary");
        time1.classList.add("text-bg-success");

        time4.classList.remove("text-bg-success");
        time4.classList.add("text-bg-secondary");
        time2.classList.remove("text-bg-success");
        time2.classList.add("text-bg-secondary");
        time3.classList.remove("text-bg-success");
        time3.classList.add("text-bg-secondary");
      }
      break;
    case 2:
      if (time2.classList.contains("text-bg-secondary")) {
        console.log(time2);
        time1.classList.remove("text-bg-success");
        time1.classList.add("text-bg-secondary");
        time2.classList.remove("text-bg-secondary");
        time2.classList.add("text-bg-success");

        time4.classList.remove("text-bg-success");
        time4.classList.add("text-bg-secondary");
        time3.classList.remove("text-bg-success");
        time3.classList.add("text-bg-secondary");
      }
      break;
    case 3:
      if (time3.classList.contains("text-bg-secondary")) {
        console.log(time3);
        time2.classList.remove("text-bg-success");
        time2.classList.add("text-bg-secondary");
        time3.classList.remove("text-bg-secondary");
        time3.classList.add("text-bg-success");

        time4.classList.remove("text-bg-success");
        time4.classList.add("text-bg-secondary");
        time1.classList.remove("text-bg-success");
        time1.classList.add("text-bg-secondary");
      }
      break;
    case 4:
      if (time4.classList.contains("text-bg-secondary")) {
        console.log(time4);
        time3.classList.remove("text-bg-success");
        time3.classList.add("text-bg-secondary");
        time4.classList.remove("text-bg-secondary");
        time4.classList.add("text-bg-success");

        time2.classList.remove("text-bg-success");
        time2.classList.add("text-bg-secondary");
        time1.classList.remove("text-bg-success");
        time1.classList.add("text-bg-secondary");
      }
      break;
  }
}

function enjuagar() {
  console.log("Va a ir al if");
  if (!enjuague) {
    if (lavadora.enjuague < 3) {
      console.log("Primer nivel del agua");
      console.log(lavadora.enjuague);
      lavadora.enjuague++;
      console.log("Segundo nivel del agua");
      console.log(lavadora.enjuague);
    } else {
      lavadora.enjuague--;
      enjuague = true;
    }
  } else {
    console.log("Primer nivel del agua");
    console.log(lavadora.watchingLevel);
    lavadora.watchingLevel--;
    console.log("Segundo nivel del agua");
    console.log(lavadora.watchingLevel);
  }

  console.log(lavadora.enjuague);
  switch (lavadora.enjuague) {
    case 1:
      if (enjuague1.classList.contains("text-bg-secondary")) {
        enjuague1.classList.remove("text-bg-secondary");
        enjuague1.classList.add("text-bg-success");

        enjuague2.classList.remove("text-bg-success");
        enjuague2.classList.add("text-bg-secondary");
        enjuague3.classList.remove("text-bg-success");
        enjuague3.classList.add("text-bg-secondary");
      }
      break;
    case 2:
      if (enjuague2.classList.contains("text-bg-secondary")) {
        console.log(enjuague2);
        enjuague1.classList.remove("text-bg-success");
        enjuague1.classList.add("text-bg-secondary");
        enjuague2.classList.remove("text-bg-secondary");
        enjuague2.classList.add("text-bg-success");

        enjuague3.classList.remove("text-bg-success");
        enjuague3.classList.add("text-bg-secondary");
      }
      break;
    case 3:
      if (enjuague3.classList.contains("text-bg-secondary")) {
        console.log(enjuague3);
        enjuague2.classList.remove("text-bg-success");
        enjuague2.classList.add("text-bg-secondary");
        enjuague3.classList.remove("text-bg-secondary");
        enjuague3.classList.add("text-bg-success");

        enjuague1.classList.remove("text-bg-success");
        enjuague1.classList.add("text-bg-secondary");
      }
      break;
  }
}

function startWatching() {
  if (lavadora.lavar) {
    console.log(lavadora.lavar);
    if (lavar.classList.contains("text-bg-success")) {
      lavar.classList.remove("text-bg-success");
      lavar.classList.add("text-bg-secondary");
    }
    lavadora.lavar = false;
    console.log("Entra a la función");
  } else {
    console.log(lavadora.lavar);
    if (lavar.classList.contains("text-bg-secondary")) {
      lavar.classList.remove("text-bg-secondary");
      lavar.classList.add("text-bg-success");
    }

    lavadora.lavar = true;
    console.log("Entra a la función");
  }
}
