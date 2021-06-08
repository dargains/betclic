<template>
  <section class="hero">
    <figure class="background">
      <img
        src="../assets/images/hero 1.png"
        alt="Este euro vai bater"
      >
    </figure>
    <div class="paper">
      <figure class="paperTop">
        <img
          src="../assets/images/paper_1 1.svg"
          alt="paper top"
        >
      </figure>
      <p>
        Bem-vindo/a ao campeonato dos adeptos de bancada. Para a Betclic todas as oportunidades são boas para nos divertirmos e por isso decidimos criar este site privado e convidar jornalistas, profissionais de comunicação e 3 ex-jogadores (Nuno Gomes, Costinha e Jorge Andrade) para darem os palpites para os jogos do EURO2020. No fim quem fizer mais pontos ganha uma viagem para duas pessoas, com estadia em hotel de 5 estrelas incluída, à capital do País vencedor do EURO.
        <br>
        <br>
        Passa por cá no dia anterior aos jogos para conseguires apostar sem contratempos.
        <br>
        <br>
        Boa sorte.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero'
}
</script>

<style lang="scss" scoped>
.hero {
  background-color: #DF0C14;
  padding-top: 500px;
}
.background {
  position: absolute;
  width: 100%;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
}
.paperTop {
  position: absolute;
  right: 0;
  left: 0;
  bottom: calc(100% - 10px);
}
.paper {
  background-color: #F4F4F3;
  max-width: 940px;
  margin: 0 auto;
  text-align: center;
  padding: 20px 40px 60px;
  p {
    max-width: 640px;
    font-size: 15px;
    line-height: 18px;
    margin: 0 auto;
  }
}
@media screen and (max-width: 768px) {
  .hero {
    padding-top: 220px;
  }
  .background {
    img {
      width: 160%;
      left: -30%;
    }
  }
  .paper {
    padding: 20px 20px 60px;
  }
  .paperTop {
    bottom: calc(100% - 5px);
  }
}
</style>
