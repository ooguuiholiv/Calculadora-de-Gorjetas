function calculateTip(event) {
  event.preventDefault();
  let bill = document.getElementById("bill").value;
  let serviceQuality = document.getElementById("serviceQuality").value;
  let peoples = document.getElementById("peoples").value;

  if (bill == '' | serviceQuality == 0){
    alert("por favor, preencha os campos solicitados")
    return;
  }

  if(peoples == "" | peoples <= 1){
    peoples = 1;
    document.getElementById("each").style.display = "none"
  } else {
    document.getElementById("each").style.display = "block"
  }

  let total = (bill * serviceQuality);
  let media = (total / peoples);
  media = media.toFixed(2)
  total = total.toFixed(2);
  document.getElementById('tip').innerHTML = total;
  document.getElementById('each').innerHTML = "R$" + media + " por pessoa";
  document.getElementById('totalTip').style.display = "block"
}

document.getElementById('totalTip').style.display = "none"
document.getElementById('each').style.display = "none"

document.getElementById('tipsForm').addEventListener('submit', calculateTip)