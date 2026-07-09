const questions = [
  "Apakah kamu pernah membeli barang hanya karena sedang viral?",
  "Apakah kamu takut dianggap ketinggalan tren jika tidak memiliki barang tertentu?",
  "Apakah kamu sering membuka marketplace atau media sosial hanya untuk melihat barang yang sedang populer?",
  "Apakah kamu pernah membeli barang meskipun sebenarnya belum membutuhkannya?",
  "Apakah kamu sering tergoda membeli barang setelah melihat influencer atau teman menggunakannya?",
  "Apakah kamu pernah menyesal setelah membeli barang secara spontan?",
  "Apakah kamu merasa senang jika bisa mengikuti tren terbaru?",
  "Apakah kamu sulit menolak keinginan membeli barang yang sedang ramai dibicarakan?",
  "Apakah kamu pernah membeli barang karena takut kehabisan promo atau stok?",
  "Apakah kamu sering membandingkan barang milikmu dengan milik orang lain di media sosial?"
];

const form = document.getElementById("quiz");

questions.forEach((q, i) => {
    form.innerHTML += `
    <div class="question">
        <p>${i + 1}. ${q}</p>

        <label>
            <input type="radio" name="q${i}" value="1" required>
            Ya
        </label><br>

        <label>
            <input type="radio" name="q${i}" value="0">
            Tidak
        </label>
    </div>
    `;
});

form.innerHTML += `
<br>
<button type="submit">Lihat Hasil</button>
`;

form.addEventListener("submit", function(e){

    e.preventDefault();

    let score = 0;

    for(let i=0;i<questions.length;i++){
        score += Number(document.querySelector(`input[name=q${i}]:checked`).value);
    }

    let hasil="";

    if(score<=3){
        hasil="🟢 FOMO Rendah<br>Kamu cukup bijak dalam berbelanja.";
    }else if(score<=7){
        hasil="🟡 FOMO Sedang<br>Kamu terkadang mudah terpengaruh tren.";
    }else{
        hasil="🔴 FOMO Tinggi<br>Kamu cukup sering membeli barang karena pengaruh tren dan media sosial.";
    }

    form.innerHTML=`
    <h2>Hasil Self Check</h2>
    <h1>${score}/10</h1>
    <p>${hasil}</p>
    <br>
    <button onclick="location.reload()">Coba Lagi</button>
    `;
});