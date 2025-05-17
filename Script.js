const token = "7863308826:AAGqBrSJfXb5tgUqYNJVTfHeIetqOZ9BzvQ";
const chatId = "7420684427";

function kirimPesan(teks) {
  fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: teks
    })
  })
  .then(res => res.json())
  .then(data => {
    alert("Pesan terkirim!");
    console.log(data);
  })
  .catch(err => {
    alert("Gagal kirim");
    console.error(err);
  });
}

// Event untuk tombol R
document.getElementById("or").addEventListener("click", function () {
  kirimPesan("R");
});

// Event untuk tombol Y
document.getElementById("iy").addEventListener("click", function () {
  kirimPesan("Y");
});
