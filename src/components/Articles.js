import React from "react";
import img1 from "../images/Articles/Nela Podupu.jpg";
import img2 from "../images/Articles/Andubaatu.jpg";
import img3 from "../images/Articles/Vivaram.jpg";
import img4 from "../images/Articles/Raathri Pagalu.jpg";
import img5 from "../images/Articles/Katha Telangaanam.jpg";
import img6 from "../images/Articles/Kashapa.jpg";
import img7 from "../images/Articles/Patuva.jpg";
import img8 from "../images/Articles/Knr Zilla.jpg";
import img9 from "../images/Articles/Pvn Rao.jpg";
import ArticleItems from "./ArticleItems";

const summary = [
  {
    sum: "మానవ జీవితాలను గ్లోబలైజేషన్ మలుపు తిప్పింది. వృత్తులు కూలిపోయాయి. కొత్త కొత్త పనులు అందుబాటులోకి వచ్చాయి. ఈ నడమన అనేకుల జీవితాలు అతలాకుతలమయ్యాయి. కొందరి బతుకులు అందలం ఎక్కాయి. వాటి కారణాలను వెతుక్కుంటూ, జీవితాలను విశ్లేషించిన కథలు ఇందులో ఉన్నయి.",
  },
  {
    sum: "ఉత్తర తెలంగాణ కథకుల వివరాలు, కథలు ఇందులో పొందుపరిచారు. మొత్తం 224 మంది కథకుల విశేషాలు, ఆ కథల సమాచారం ఇందులూ ఉంది. ఇది కథా పరిశోధకులకు కరదీపిక వంటిది.",
  },
  {
    sum: "కథకుడు స్వయంగా ఉపాధ్యాయుడు. ఈ సంపుటిలో విద్య, బడి, విద్యార్ధుల చుట్టూ తిరిగిన కథలు ఉన్నాయి. నేటి విద్యావ్యవస్థ, వ్యాపారధోరణలు, పల్లెల్లో వచ్చిన మార్పులు, నగర జీవితం కథల ద్వారా అందించారు.",
  },
  {
    sum: "ఇది విమర్శా వ్యాస సంపుటి. ముఖ్యంగా వివిధ రచయిత కథలను, వారి కథల పుస్తకాలను వివరిస్తూ రాసిన వ్యాస సమాహారం.జిల్లా, రాష్ట్ర, కథా సాహిత్యానికి చెందిన పరిణామాలు ఇందులో కనిపిస్తాయి.",
  },
  {
    sum: "ప్రత్యేక తెలంగాణ ఉద్యమం జరుగుతున్న సమయంలో రాసిన వ్యాసాలు ఇందులో ఉన్నాయి. నిజాం జమానా నుంది నేటి వరకు తెలంగాణాలో వచ్చిన ఉద్యమాల్ని, విప్లవాన్ని, ధోరణుల్ని, పరిణామాల్ని కథ ఏ విధంగా చిత్రించిందో సోదాహరణంగా వివరించారు. కథ ఒక చరిత్రకి వనరు అని ఇందులో ప్రతిపాదించారు.",
  },
  {
    sum: "కథ, నవల, కవిత్వం, మొదలగు ప్రక్రియల్లో వచ్చిన విశేషమైన రచలనలపై విమర్శనాత్మకమైన చర్చ చేసిన వ్యాసాలు ఇందులో ఉన్నాయి. రచయిత ప్రముఖులను కలిసి వారితో జరిగిన ఇంటర్వ్యూలను ఇందులో పాఠకులకు అందించారు.",
  },
  {
    sum: "'కశప' అంటే కథా శతక పద్యం అని అర్ధం. తెలుగు కథా సాహిత్యంలో ఇది సరికొత్త ప్రయోగం. రచయిత స్వయంగా కథకుడు. కథకు సరిపోగల మకుట సహిత శతకపద్యాన్ని కథ కింద అందంచాడు. ఇందులో 117 కథలున్నాయి.",
  },
  {
    sum: "మాజీ ప్రధాని పీ.వి. శతజయంతి సందర్భంగా, అతని వచన రచనాల విశిష్టతలను విశ్లేషించిన పుస్తకం ఇది. లోపలి మనిషి,  అబల జీవితం లాంటి నవలలు మరి కొన్ని కథల శైలీ, శిల్పి విశేషాలు ఇందులో కనిపిస్తాయి.",
  },
  {
    sum: "తెలంగాణ ప్రభుత్వం కొత్తగా జిల్లాల విభజన చేసింది. కరీంనగర్ జిల్లా నాలుగు జిల్లాలుగా విడిపోయింది. కొత్తగా ఏర్పడిన  కరీంనగర్ ముందు మిగిలిన సాహిత్య, సాంస్కృతిక వివరాలను ఈ పుస్తకంలో పొందుపరిచారు. పద్యం, అనువాదం, కవిత్వం, కథ, నవల, నాటకం మొదలగు రంగాలలో విశేష కృషి చేసిన వ్యక్తులను మరియు వారి రచనలను పరిచయం చేశారు.",
  },
];

const dates = [
  {
    date: "(సెప్టెంబర్, 2004)",
  },
  {
    date: "(అక్టోబర్, 2008)",
  },
  {
    date: "(ఆగస్టు, 2011)",
  },
  {
    date: "(నవంబర్, 2011)",
  },
  { date: "(సెప్టెంబర్, 2013)" },
  {
    date: "(మార్చి, 2017)",
  },
  {
    date: "(జనవరి, 2020)",
  },
  {
    date: "(2021)",
  },
];

function Articles() {
  return (
    <>
      <div className="container-fluid" style={{ marginTop: "90px" }}>
        <ArticleItems
          img={img1}
          title="నెల పొడుపు"
          summary={summary[0].sum}
          date={dates[0].date}
        />
        <ArticleItems
          img={img2}
          title="అందుబాటు"
          summary={summary[1].sum}
          date={dates[1].date}
        />
        <ArticleItems
          img={img3}
          title="వివరం"
          summary={summary[2].sum}
          date={dates[2].date}
        />
        <ArticleItems
          img={img4}
          title="రత్రి పగలు... ఒక మెలుకువ"
          summary={summary[3].sum}
          date={dates[3].date}
        />
        <ArticleItems
          img={img5}
          title="కథా తెలంగాణం"
          summary={summary[4].sum}
          date={dates[4].date}
        />
        <ArticleItems
          img={img6}
          title="కశప"
          summary={summary[5].sum}
          date={dates[5].date}
        />
        <ArticleItems img={img7} title="పటువ" summary={summary[6].sum} />
        <ArticleItems
          img={img8}
          title="కరీంనగర్ జిల్లా సాహిత్య చరిత్ర"
          summary={summary[7].sum}
          date={dates[6].date}
        />
        <ArticleItems
          img={img9}
          title="పి.వి.నరసింహారావు"
          sub="(కొన్ని వచన రచనలు - ఒక పరిశీలన)"
          summary={summary[8].sum}
          date={dates[7].date}
        />
      </div>
    </>
  );
}

export default Articles;
