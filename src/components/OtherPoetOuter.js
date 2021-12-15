import React from "react";
import OtherPoets from "./OtherPoets";
import "../styles/OtherPoets.css";

const poets = [
  { name: "జయధీర్ తిరుమలరావు గారు" },
  { name: "కోమటిరెడ్డి మోహన్ రెడ్డి గారు" },
  { name: "కాత్యాయనీ విద్మహే గారు" },
  { name: "కె. శ్రీనివాస్ గారు" },
  { name: "డా॥ సుంకిరెడ్డి నారాయణరెడ్డి గారు" },
  { name: "ఆచార్య రాచపాళెం చంద్రశేఖరరెడ్డి గారు" },
];

const content = [
  {
    content:
      "రాయడం నేర్చుకోవడానికే. నేర్చుకున్నది రాయడానికే అనినమ్మే వ్యక్తి స్వామి. అతని కథలు సవిమర్శక వాస్తవికతకి ప్రతిరూపం. ఈ కథల్లోని ముఖ్య లక్షణం మాటల పొదుపరితనం. కథావస్తువుని తార్కికంగా విభజించుకొని స్పష్టంగా రాయడం ఇతనిఇజం. హృదయంతో అనుభవించిన విషయాన్ని హత్తుకునేట్లు మలచడమే లక్ష్యం. కూలుతున్న పల్లెల్లో కుములుతున్న బతుకుల 'సాక్షి' ఈ కలం. వర్తమాన సామాజికతకి అక్షరరూపం ఈ కథా సాహిత్యం.ఉత్తర తెలంగాణా కథా సాహిత్యంపై పిహెచ్.డి. చేసే స్వామి పరిశోధకుడు - కథకుడు. తన పరిశోధనకి తానుకూడా వస్తువైనాడు.",
  },
  {
    content:
      "కథకునిగా మొదలై కథా పరిశోధకునిగా ఎదిగి, కథల ద్వారా ఆ యా కథారచయితలను పరిచయం చేయాలనుకున్న స్వామిగారి ఆలోచన ప్రశంసార్హం. ఈ సంకల్పం ఆరోగ్యకరమైన అలవాటును అందుబాటు లోకి తెచ్చింది. ఈ విధంగా సామాజిక ఈ రుణాన్ని తీర్చుకున్న స్వామిగారు అభినందనీయులు. తన రచనా శైలితో పాఠకులను ఆకట్టుకోగలిగిన వీరి కలం నుండి మరిన్ని మంచి రచనలు రావాలి, సమాజ హితం జరగాలి.",
  },
  {
    content:
      "స్వామి తీసుకున్న కథాంశాలు వర్తమాన సందర్భపు ఒత్తిడి నుండి వచ్చినవి. తెలంగాణ గ్రామీణ ప్రకృతి వనరుల వర్ణన, పండుగలు, పాటలు ఆయన కథలకు నేపథ్యం. స్వామి తాను రాసిన కథలలోని జీవితానికి సన్నిహిత పరిశీలకుడు. దాని చుట్టూ తిరుగుతూ, దానిని అర్ధం చేసుకోవడానికి ప్రయత్నించే పరిశోధకుడు. జీవితం ఉన్నతంగా ఉ త్తమంగా ఉండాలని తపించే చింతనాపరుడు. అందుకు అవరోధంగా ఉన్న శక్తులపై యుద్ధం అతని కార్యక్రమం. ఆ క్రమంలో రూపొందినవే ఈ కథలు.",
  },
  {
    content:
      "తెలంగాణ విషయానికి వచ్చేసరికి మౌలికమయిన సామగ్రే ఇప్పుడు బయటపడుతున్నందున, వాటి మీద అనంతర కృషి ఇంతకాలం జరిగే అవకాశం లేకపోయింది. తెలంగాణ పరిశోధనలో మౌలికమయిన కృషే ప్రధానంగా చేస్తున్నవారు, అనంతర కృషిని ఇతరులు అందుకుంటారని ఆశించారు. అంటే, కనిపెట్టిన, సేకరించిన తెలంగాణ సాహిత్య రచనల మీద విమర్శ, పరిశోధన, ప్రచారం చేయవలసిన బాధ్యత కొత్త తరంమీద ఉన్నదన్న మాట . బి.వి.ఎన్. స్వామి ఆ బాధ్యతను గుర్తించి, చేపట్టినందుకు అభినందించవలసి ఉన్నది. తెలంగాణ పాత, కొత్త కథలను, తెలంగాణవాద చైతన్యంతో మదింపు వేయడానికి, విశ్లేషించడానికి, పరిచయం చేయడానికి ఆయన ప్రయత్నించారు. పరిశోధకుల కృషిని అందుకుని విమర్శ రంగంలో కొనసాగించే కర్తవ్యాన్ని స్వీకరించడమే పెద్ద దోహదం.",
  },
  {
    content:
      "విప్లవోద్యమాన్ని, అన్ని అస్తిత్వోద్యమాలనీ స్వీయ దృష్టి కోణం నుంచి కాక సామా జిక సందర్భం నుంచి పరిశీలించిండు. Subjective గా చూడకుండా Objective గా చూసిండు. మొత్తంగా బి.వి.ఎన్. స్వామి ప్రగతిశీల విమర్శకుడు. ఇతడు తెలుగు సాహిత్యాన్ని, తెలంగాణ సాహిత్యాన్ని సీరియస్ గా అధ్యయనం చేస్తున్నడని గట్టిగా చెప్పవచ్చు.",
  },
  {
    content:
      "ప్రయోగ పందిరి మీద మిత్రులు డా||బి.వి.ఎన్.స్వామి కూడా ఒక కొబ్బరాకు పరిచారు. ఇదిగో ఈ కప (కథ శతక పద్యం) ఆయన కొబ్బరాకు. మల్లికార్జున పండితారాధ్యుని “శివతత్వసారం” మొదలుకొని ఇందూరు పద్య భారతి తెలంగాణ శతకం దాకా 117 కథలకు పద్యాలను కూర్చూరు. ఈయన స్వీకరించిన శతకాలలో సంప్రదాయ, ఆధునిక శతకాలు ఉన్నాయి. వీటిలో వేమన పద్యాలకు, సుమతీ శతకానికి ప్రాధాన్యం దక్కడం న్యాయమే. ప్రాచీన పద్యాలకు కూడా సమకాలీన సామాజిక సందర్భాలను కల్పించడం స్వామి వర్తమాన దృక్పథానికి నిదర్శనం.",
  },
];
function OtherPoetOuter() {
  return (
    <div className="container otherOuter">
      <div className="row">
        <h2>స్వామి గారి గురించి ఇతర పెద్దల మాటల్లో...</h2>
        <OtherPoets poet={poets[0].name} content={content[0].content} />
        <OtherPoets poet={poets[1].name} content={content[1].content} />
        <OtherPoets poet={poets[2].name} content={content[2].content} />
        <OtherPoets poet={poets[3].name} content={content[3].content} />
        <OtherPoets poet={poets[4].name} content={content[4].content} />
        <OtherPoets poet={poets[5].name} content={content[5].content} />
      </div>
    </div>
  );
}

export default OtherPoetOuter;