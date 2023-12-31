// const normalData=['म ,','म ,'];
// const normalData=['मेरो नाम राम हो।','म भात खान्छु।'];
const tutor1Data = "अ आ इ ई उ ऊ ए ऐ ओ औ अं अः ।";
const tutor2Data = "क ख ग घ ङ च छ ज झ ञ ट ठ ।";
const tutor3Data = "ड ढ ण त थ द ध न प फ ब भ ।";
const tutor4Data = "म य र ल व स श ष ह क्ष त्र ज्ञ ।";

const practice1Data = [
  `जग समतलक वग हक शलजम लसपस सदन सफलतम खल फल मगज सत दस बर कफ लहर लटकन हज फलक दनक कचकच छत खतम चरण सहज नल नगरसडक शतक नयन मग कमसल धरमर भरसक समतलसतह बहस रसमय तडकभडक जतन नकल रमन बम बस पटपट पथ नवम दशमलब खटखट करण गरम शर तर कड सफल पकड सलह जठर झमझम तटगत वय खनन कपट मठ भग गढ मलहम गडबड नर डङडङ गलगल गणक गलत रबर तय चटक गमनपथ चयन शरण शहर जमघट बकस फसल गर पल लहडसनक सनद वध लत शय तल हरफ तह जलमय शपथ जब झपट बरफ पट धरन गठन गहन`,
  `कठघर वर भल मरमत भडक परल कच सहमत यमक भलकट भकभक सतत टप दर डरभय रस महल भय खलक रक शशक मह हटक सफर कहर नस मत सलगम बदर बहन छल चलन वचन बचत शयन फरक छलफल लवणजल यव टक शकट बढ घर जलपथ लख रहल खलबल खरब लवण फतरफतर घटक टरटर पसल चरम तहपरत धर कलश जलथल समतल कलम वजन कसम खत कमल चनड लहड शमन हलचल नगरशहर कलकल लतपत करङ सरसर गज चहक नगद छनक भजन जलजन थकथक दल रगत बखत पतन बल जलकमल जमठ बगलस नगर डर सरल करतल लय सतह समथर गनगन चपल ठहर कवच खबर`,
  `भवन रत घटघट बगर लहलह रकम नजर दलगत जय सदर गगन समझ छलकपट छङछङ हडप लङ घन हर नमन मलमल वष दह वन नहर पहल परततह पवन टमटम सरहद तक घटबढ कम धड पटक सघन बटन फतफत जलप समलत हल चल घडकन पच सय मनन सरदर टङटङ सबल मन दमकल दशक दलबदल टकटक खट बगल मल कलघर सकस जफत लथपथ हरण गमन छछ जल मटर सकसक नभ बयर हठ रज भर गत तरल नरम कल नथ वदन कसर चमक वरपर टलपल रसद दखल रङ रगड नङ तट परश रण यश तलब लमकलमक मखमल सम गफ ढल मरण मकर कण बकबक`,

  `झनझन पद जलन परत लगभग रसबस सरस हरक रहनसहन चकमक सहन झटपट सजग जनमत शम यस शव समय पटल मलम सकल रहन जनक शत सहगमन धवल हतपत घरघर जङ रहलपहल लगत बध तब तपतप छमछम सब दलदल नरक यम थरथर मतलब घरजम कद पर परम हद डलर मरकत पलक डच वतन जड जलचर सडक पप कमर पठन वमन फरकफरक टलक पलङ पदक खयर थप धन रमझम गण दमन कदर कलह सह कटहर धडकन घनफल कक रथ कवल ठग दम मद कसरत जहर सहचर कलरव गरल कथन वहन नम झलक सयल नट जन सनक चरन नव सडन थर कदम वनपथ दहन कर मकल गल लपट जगर`,
];

const practice2Data = [
  `यो सत्य छ । पृथ्वीमा सूर्यलाई देवताको रुपमा लिएता पनि जीवनको आधार सूर्य नै हो । पौराणिक भनाइ प्रकृतिका प्रमुख ५ शक्ति मध्ये पृथ्वी लगायत सबै ग्रह, उपग्रह र नक्षत्रमण्डल सूर्यबाटै उत्पन्न भएको हो । यो सत्य छ, तर सूर्य ग्रहणको बेलामा सूर्यमा एकाएक कालो धब्बा बाट ढाकिएको देख्दा हाम्रो विश्वास देवतामा ग्रहण लागे र यो पृथ्वीमा जीवन नष्टको अनिष्ट हुने भनिन्छ । सूर्यग्रहणको कल्पना महाभारत समयमा पनि अनिष्टकारी घटनाका रुपमा लिएको छ । सूर्यग्रहण लाग्ने कुनै न कुनै अनिष्टकारी घटनाको कल्पनासंग सम्बन्धित पाइएको छ ।`,

  `पृथ्वीमा सुर्यलाई देवताको रुपमा लिएता पनि जीवनको आधार सम्झी केही हुने घटना विश्वास साथै ग्रहणको बेला निस्कने किटाणुलाई ध्यानमा राखि खाने-पिउने र दैनिक व्यवहारको काममा सावधानी पनि बरतनु पनि भनिएको छ, किनकि यस समय निस्केको किटाणुबाट बढी रोग लाग्ने सम्भावनाको विश्वासबाट बच्न शान्तिपूर्ण रुपले धर्ममा विश्वास राख्ने, पुजा पाठ गर्ने र आफ्नो परमपूज्यलाई प्रार्थना गर्नेमा नै विश्वास गरिएको छ । प्राचिनकालमा रोमको युनान साहित्यमा ११७८,६४८ र ४६३ ई. पूर्वमा भएका सुर्यग्रहणको उल्लेख छ । सुर्यग्रहणको पुरानो उल्लेख चिनियाँ इतिहास इसापूर्व २१३६ को २२ अक्टोवर को दिन भएको मानिन्छ ।`,

  `सूर्य ग्रहणको उल्लेख बाइबलमा ७६३ इसापूर्वमा भएको उल्लेख छ । पैगम्बर मोहमदको छोरो इब्राहिमको मृत्यु सुर्यग्रहणका दिन भएको बताउँछ । यो २२ जनवरी सन् ६३२ को कुरो थियो, त्यही सूर्यग्रहण लागेको दिनको उल्लेख छ । पूर्विय ग्रन्थ ऋगवेदमा स्वरभानु नामको राक्षसले सुर्यलाई निलेर पृथ्वीलाई अन्धकारमय बनाएको कुरा पनि उल्लेख पाइन्छ । भारत-नेपालमा रहेको मान्यता राहु नामको राक्षसले सूर्यलाई निल्छ तब सूर्य ग्रहण हुन्छ । यो वास्तवमा अनिष्ट हुनेको सुचना पाइन्छ । यस्तै वाल्मिकि रामायणमा राम र खर नामको राक्षस बीच घनघोर युद्ध चलिरहेको बेला सूर्य ग्रहण लागेको कुरा मानि आएको छ ।`,

  `महाभारतमा पनि अर्जुनले जयद्रथको हत्या गर्ने समयमा क्षणभरको लागि आकास अन्धकारमय भयो । पाण्डवहरुको वनवासको समय र दुर्योधनको मृत्युको समयमा पनि सूर्यग्रहणको उल्लेख छ । यस्तो त सूर्यको महत्व हनुमान जी ले पनि एक पटक सूर्यलाई निलेर पुरा पृथ्वी केही दिन अन्धकारमय बनाएको कथा पनि सर्व विदितै छ । प्रचीनकालमा मिश्रवासीहरुले सूर्यलाई देवताको रुपमा कल्पना गरेको र मानेको छ, कि सूर्य आफ्नो यात्रा नाव(रथ)मा बसेर गरि रहेको छ । उपरोत्त सबै कुरा साथै वास्तवमा यो सबै ग्रहहरुसंग सम्बन्धित र प्राकृतिक खगोलिय घटना नै मात्र हो, र यसमा सचेत बस्न विज्ञानबाट सुझाव पनि होला ।`,
];

const practice3Data = [
  `नेपालको पूर्वी सीमाना मेची नदी देखि पश्‍चिमी सीमाना महाकाली नदीसम्मको औसत लम्बाइ ८८५ किलोमिटर छ। उत्तरदेखि दक्षिणको चौडाइ भने एकनासको छैन। पूर्वी भागभन्दा पश्चिमी भाग केही चौडा छ। त्यस्तै मध्य भाग भने केही खुम्चिएको छ। यसमा अधिकतम चौडाइ २४१ किलोमिटर र न्यूनतम चौडाइ १४५ किलोमिटर रहेको छ। यसर्थ नेपालको औसत चौडाइ १९३ किलोमिटर रहेको छ। नेपालको उत्तरमा चीनको स्वशासित क्षेत्र तिब्बत पर्दछ भने दक्षिण, पूर्व र पश्‍चिममा भारत पर्दछ। नेपालका लगभग ८१% नागरिक हिन्दू धर्मावलम्बी छन्, यस अर्थमा नेपाल विश्वकै सबैभन्दा बढी प्रतिशत हिन्दू धर्मावलम्बी भएको राष्ट्र पनि हो। यसबाहेक बौद्ध, इस्लाम, किराँत आदि धर्म मान्ने मानिसहरू पनि यहाँ बसोबास गर्दछन्।`,
  `एउटा सानो क्षेत्रको लागि नेपालको भौगोलिक विविधता निकै उल्लेखनीय छ। यहाँ तराईका उष्ण फाँटदेखि चिसा हिमालयका शृङ्खला अवस्थित छन्। संसारका सबैभन्दा उच्च १४ हिमशृङ्खलाहरू मध्ये ८ वटा नेपालमा पर्दछन्, जसमध्ये संसारको सर्वोच्च शिखर सगरमाथा पनि एक हो। नेपालको प्रमुख सहर र राजधानी काठमाडौँ हो। काठमाडौँ, ललितपुर र भक्तपुर जिल्लारूलाई काठमाडौँ उपत्यका भनेर चिनिन्छ। अन्य प्रमुख सहरहरूमा पोखरा, विराटनगर, भरतपुर, वीरगञ्ज, जनकपुर, भैरहवा, नेपालगञ्ज पर्दछन् । नेपाल शब्दको उत्पत्ति बारेमा ठोस प्रमाण उपलब्ध नभएतापनि एक प्रसिद्ध किंवदन्ती अनुसार मरिची ऋषिका पुत्र 'ने' मुनिले पालन गरेको ठाउँको रूपमा यहाँको नाम नेपाल रहन गएको विश्वास छ।`,
  `निरन्तर रूपमा राजा-रजौटाहरूको अधीनमा रहेर फुट्ने र जुट्ने लामो तथा सम्पन्न इतिहास बोकेको अहिले नेपाल भनेर चिनिने यो खण्डको एकिकरण वि.सं. १८२४ मा गोरखाका राजा पृथ्वी नारायण शाहले थालेका थिए। वि. सं. २०४६ सालको आन्दोलन पश्चात् संवैधानिक राजतन्त्रको नीति अवलम्बन गरिएको थियो। वि.सं. २०६३ को लोकतान्त्रिक जनआन्दोलनपश्चात् राजाले देशको सार्वभौमसत्ता जनतालाई हस्तान्तरण गरे। वि.सं. २०६५ जेठ १५ गते पहिलो संविधानसभाको ऐतिहासिक बैठकले राजतन्त्रलाई प्रतिस्ठापन गर्दै नेपाललाई एक सङ्घीय लोकतान्त्रिक गणतन्त्र घोषणा गर्‍यो। वि.सं. २०७२ असोज ३ गते नेपालको संविधान जारी भएपश्चात प्रशसनिक रूपमा सात प्रदेशमा विभाजन गरी नेपाललाई एक धर्मनिरपेक्ष सङ्घीय संसदीय गणतन्त्र कायम गरिएको छ।`,
  `नेपालमा धेरै पहिले देखिनै आयुर्वेदिक प्राकृतिक चिकित्सा पद्धति उपयोगमा थियो। वैद्य र परम्परागत चिकित्सकहरू गाउँघर तथा सहरमा स्वास्थ्यसेवा पुर्याउँथे, उनीहरूको औषधिका श्रोतहरू नेपालको हिमालदेखि तराईसम्म पाइने जडिबुटीहरू नै हुन्थे। आधुनिक चिकित्सा पद्धतिको सुरुवात राणा प्रधानमन्त्री जङ्गबहादुर राणाको बेलायत यात्रा पछि दरबार भित्र सुरु भए तापनि नेपालमा आधुनिक चिकित्सा संस्थाको रूपमा राणा प्रधानमन्त्री वीर शम्शेरको पालमा काठमाडौँमा सन १८८९ मा स्थापित वीर अस्पताल नै हो। त्यसपछि चन्द्र शम्शेरको पालामा स्थापित त्रि-चन्द्र सैनिक अस्पताल हो।`,
];

const practice4Data = [
  `लाली गुराँस नेपालको राष्ट्रिय फूल हो। यो फूललाई भारतको उत्तराखण्ड राज्यको पनि राष्ट्रिय फूलको रूपमा राखिएको छ। यो फूल पहाडी भेगमा पाईने गुराँसको फूल हो। लाली गुराँस साधारण तया माघ, फागुन तिर फूलेको देखिन्छ। तर छिटो फूल्ने ठाउँमा यो फूल पौषको महिनामा पनि फूलेको देखिन्छ। फूलको रंग रातो हुन्छ। फूलको आकार औसत अरु फूलहरू भन्दा केही ठूलो हुन्छ। यसको पात लामो हुन्छ। पातको लम्बाई लगभग ५ देखि १० से.मी.सम्म हुन्छ। यसको रुखको उँचाई र आकार ठाउँ अनुसार फरक हुन्छ। निम्न पहाडी भू-भागमा यसको रुख मध्यम खालको हुन्छ भने उच्च पहाडी भागमा यसको रुख धेरै ठूलो र झ्याम्म परेको हुन्छ।`,

  `मरो दिन बर्बाद भो यादमा तिम्रो फेरी बिहानि को सुरुवात भो यादमा तिम्रो फेरी चाहेर पनि मैले भन्न सकिन तिमीलाई मेरो मुटु चोरि सक्यौ तिमीले भागेर शरीर बाट यो आत्मा ले छोडेर गाछ तिमीलाई नै खोजि हिड्छु रे `,

  `शिशिर यामकाे जाडोमा पनि फुल्दछ फुल मुस्कानकाे अधाँराे अाैंशीकाे रातमा पनि बल्दछ दियो विश्वासको नयनभरीकाे आशुमा पनि बसेकाे हुन्छ तस्बिर`,
  
  `आऊ नाचौं अँध्यारोमा जुनकिरी नाचे जस्तै आऊ नाचौं अँध्यारोमा जुनकिरी नाचे जस्तै बतासमा उडौं आज सिमलको भुवा जस्तै सिमलको भुवा जस्तै दुई कदम साथ हिडौं छुटिनु त छदै छ भरे फेरी एकान्तमा रुनु त छदै छ केही मिठो वात गर रात त्यसै ढल्किदै छ`,
  
  `मलाई नसोध कहाँ दुख्छ घाऊ। म जे छु, ठिकै छु बिथोल्न न आउ। मलाई नसोध, कहाँ दुख्छ घाऊ। मेरो जिन्दगीमा सधै यो उदासी। सकेकै छु जिउन, कहिलै नहासी। मेरो घाउ तिमी नहासे पो दुख्छ। त्यसैले म भन्छु तिमी मुस्कुराउ। मलाई नसोध, कहाँ दुख्छ घाऊ।`,
];

const practice5Data = [
  `उडी उडी मन भाग्छ किन तिम्रै तिर हेर मन के गरु म हासेर बोल न माया सहन सक्दिन रुठो तिमी भाईदिये कि दुखी दिन्छ मन नै चुडियला बजा का तार तर मन का मेरो सलौ साल तिमीले सुन्छौ भने बजी रहन्छ रे  तिम्रो र मेरो भेट भो संजोग ले भन्छौ कि निएती नै तिम्रो लागि लेख्नु रैछ यो गीत`,

  `एउटा मान्छेको मायाले कति फरक पर्दछ जिन्दगीमा एउटा मान्छेको मायाले कति फरक पर्दछ जिन्दगीमा एउटा साथीको साथले कति फरक पर्दछ जिउनुमा एउटा मान्छेको मायाले कति फरक पर्दछ जिन्दगीमा`,

  `तिम्रो जस्तो मुटु मेरो पनि, तिम्रो जस्तो माया मेरो पनि नबोलाऊ मलाई निष्ठुरी भनि, तिम्रो जस्तो वाधा मेरो पनि तिम्रो जस्तो मुटु मेरो पनि तिमीलाई अंगाली कताकता भागीजाने धोको मेरो पनि तर पाऊमा दस्तूरको तिम्रो जस्तो कल्ली मेरो पनि दुई प्रान एक नभए पनि`,

  `देवता त हैन म पनि, धेरै कमजोरी छ मेरो पनि पिर वेदना तिम्रो जति त्यति नै त छ यहाँ मेरो पनि रातमा रोएछौ तिमी पनि तिमी जस्तै रोएँ मै पनि नबोलाऊ मलाई निष्ठुरी भनि, तिम्रो जस्तो वाधा मेरो पनि तिम्रो जस्तो मुटु मेरो पनि`,
  `केही मिठो वात गर रात त्यसै ढल्किदै छ केही मिठो वात गर रात त्यसै ढल्किदै छ भरे फेरी एकान्तमा रुनु त छदै छ केही मिठो वात गर रात त्यसै ढल्किदै छ रमाइलो कुरा गर सपनाको कुरा गर रमाइलो कुरा गर सपनाको कुरा गर संगसंगे बिताएको`,
];

const gameEasyData = [
  `गाई एक घरपालुवा जनावर हो। गाईको दुईवटा आँखा, दुईवटा कान, एउटा लामो पुच्छर, दुईवटा सिङ चारवटा खुट्टा हुन्छन्। गाई शाकाहारी जनावर हो र यसले घाँस, पात र तरकारी खान्छ। गाई नेपालको राष्ट्रिय पनि हो। गाई एक धेरै सरल, शान्त र कोमल प्राणी हो। हिन्दू धर्ममा विश्वास गर्नेहरूले गाईको पूजा गर्छन्। विश्वका देशमा गाई पाइन्छ। गाईहरू विभिन्न किसिमका हुन्छन्। सामान्यतया, गाईको रंग सेतो, खैरो, कालो, वा मिश्रित रंग सक्छ। समाप्त`,
  `मेरो माया पनि बढो अचम्मको छ। म उस्लाई आँखा फुटेन्जेल सम्म हेर्छु ऊ मलाई फुटेका आँखाले हेर्दिन समाप्त`,
  `तिम्रो लागि गाएँ मैले मायाको एउटा गीत। यो दुनियामा हुनेछ हाम्रो मायाको अवश्य जित। समाप्त`,
  `बादल लाग्दैमा आज घाम अस्तायो नभन्नु बोलिन भन्दैमा तिमीसित म रिसायो नभन्नु म त सधैँ तिमीलाई नै हेर्ने गर्छु कहिलेकाहीँ आँखा झिम्काए भन्दैमा मैले भुल्न खोजे नभन्नु। समाप्त`,
  `खोल्सामा पानी जम्दैमा त्यसलाई नदी नभन्नु म उनीसित नजिकिए भन्दैमा म तिम्रो होइन नभन्नु म त सधैँ तिमीलाई नै पाउने आश गर्छु कहिलेकाहीँ मेरो अँगालोमा च्यापे भन्दैमा तिम्रो स्वतन्त्रता लुटे नभन्नु। समाप्त`,
];
const gameNormalData = [
   `पर्खी बसे आउला भनि मेरो उठने पालो मेरो उठने पालो कुर्दा कुर्दै जिन्दगी नै भै गएछ कालो.कालो भै गएछ कालो मेरो उठ नेपालो वारि पारि अँध्यारो छ आँखा खोली हेर्दा अँध्यारो नै देखिन्छ नि आँखा चिम्ली हेर्दा वारि पारि अँध्यारो छ आँखा खोली हेर्दा अँध्यारो नै देखिन्छ नि आँखा चिम्ली हेर्दा आफ्नै छाँया आफै सँग भागी हिँड्न ठाल्यो भागी हिँड्न ठाल्यो आफ्नै माँया आफैलाई बोझ लाग्न ठाल्यो ठाल्यो बोझ लाग्न ठाल्यो बोझ लाग्न ठाल्यो तातो हाँवा बहिदिन्छ मुटु पोल्ने गरी निराशाको दियो बल्छ तिनै जल्ने गरी तातो हाँवा बहिदिन्छ मुटु पोल्ने गरी निराशाको दियो बल्छ तिनै जल्ने गरी`,

  `ढकमक फुलेको चमेली को होला त्यो मलाई सुसेली माछी जालैमा… ढकमक फुलेको चमेली को होला त्यो मलाई सुसेली माछी जालैमा सालको पात टपरी गाँसेर जुनी बिताउ सँग-सँगै हाँसेर माछी जालैमा, माछी जालैमा… सेतो हिमाल क्या राम्रो हाँसेको तिमीलाई नै हो यो जुनी साचेको माछी जालैमा.. सेतो हिमाल क्या राम्रो हाँसेको तिमीलाई नै हो यो जुनी साचेको माछी जालैमा`,

  `मुगलान हेर जादै छु सानु रेलै चढेर यो मन जल्छ हेर न सानु तिमीलाई संझेर रुदैछौ के तिमि बाटो मेरो हेरी बाँचे भने आउनेछु भेट्न छुट्टी मा फेरी सानु तिमीलाई भनेर मुग-लान हेर जादै छु सानु रेलै चढेर यो मन जल्छ हेरन सानु तिमीलाई संझेर पल्टने जीवन यो थाहा छैन के हुने हो छिठीहरु  नलेख मलाई नै सम्झेर भो सम्झेर मलाई नै भो
    `,
  `जुनतारा हेरी लजाउनु पर्दैन मायाले सै सैसै जुनतारा हेरी लजाउनु पर्दैन मायाले आहा , त्यो स्युदो अन्तै सजाउनु पर्दैन मायाले आहा त्यो स्युदो अन्तै सजाउनु पर्दैन मायाले किन मान्छेउ समाजको डर कि मनमा कोइ छ र  नमान माया समाजको डर भनिदेउ माया कि मनमा कोइ छ र हा  लाजको पर्दा हटाउन सकिन मायालु  आहा तिम्ले झैँ माया जताउन सकिन मायालु  लाग्छ मलाइ समाजको डर नभन कोइ छ र  लाग्छ नि मलाइ समाजको डर  नभन माया कि मनमा कोइ छ र `,

  `माया बिसाउने चौतारी, नजाउ माया गाउँ छोडी माया बिसाउने चौतारी, नजाउ माया गाउँ छोडी त्यो डाडाँ काटी कहाँ जान्छौ नि, बसौं माया यतै लौ मिली त्यो डाडाँ काटी कहाँ जान्छौ नि, बसौं माया यतै लौ मिली किन जान्छौ नि आफ्नै गाउँ छोडी किन हिड्छौ नि मायालाई तोडि जिन्दगी लामो छ जिउन गाह्रो अर्कोको ठाउँमा अप्ठेरो साह्रो साह्रो-गाह्रो परे खै कसलाई भन्नू? माया त लाग्छ हो तिम्रो के भन्नू?`,
];

const gameHardData = [
  `नटिप्नु हेर कोपिला! नचुँड्नु पाप लाग्दछ। नच्यात्नु फूल नानि हो! दया र धर्म भाग्दछ। नछोप्नु है चरी बरी सराप आँसु लाग्दछ। नमार्नु जन्तु है कुनै बसेर काल जाग्दछ। न घाउ चोट लाउनू सडेर चित्त पाक्दछ। धूलो नफेक्नु नानि हो! उडेर भित्र ढाक्दछ। हिलो नखेल्नु फोहरी खराब दाग लाग्दछ। न चित्त है दुखाउनु डसेर आँसु बग्दछ। बनेर फूल झैं सधैं हँसाउनू सुवास दी। सधैं रमाउनू जगत् रमेर नित्य आश दी। जताततै छ ईश रे छ सुन्नु त्यो विचार रे। छकाउने लुकाउने नराख भाव क्यै गरे! समाप्त`,
  `तिमी अर्कैकि भयौं, त के भयो ? मेरा साथीहरूले, तिमीलाई भाउजू भन्न छाडेका छैनन्। मलाई 'फलानोको पोइ' भन्न छाडेका छैनन्। तिमीलाई मेरै मान्छे गन्न छाडेका छैनन्। अझै भनु? तिम्रा भाइबहिनीहरूले पनि त, मलाई भिनाजु भन्न छाडेका छैनन्। तिमी अर्कैकि भयौं, त के भयो ? साथीभाइहरूले भेटघाटमा तिमीलाई खोज्न छाडेका छैनन्। म उदास हुदा तिम्रो हालखबर सोध्न छाडेका छैनन्। मेरो फोटोमा तिम्रो कमेन्ट खोज्न छाडेका छैनन्। अझै भनु? हाम्रा लागि डेस्टिनेसन रोज्न छाडेका छैनन्। तिमी अर्कैकि भयौं, त के भयो ? तिम्रा आफन्तहरूले मलाई चिन्न छाडेका छैनन्। मेरा आफन्तहरूले तिमीलाई  चिन्न छाडेका छैनन्। तिम्रा भाइबहिनीहरू मसंग हिन्न छाडेका छैनन्। अझै भनु? मेरा भाइबहिनीहरू तिमीसंग हिन्न छाडेका छैनन्। तिमी अर्कैकि भयौं, त के भयो ? तिम्रो फिङ्गर प्रिन्टले मेरो फोन खुल्न छाडेको छैन्। एक्लै हुदा तिम्रै कल्पनामा भुल्न छाडेको छैन्। तिम्रै नामको पासवर्डले मेरो फेसबुक खुल्न छाडेको छैन्। अझै भनु? म पनि त अनायासै तिम्रो घरको गल्ली डुल्न छाडेको छैन्। तिमी अर्कैकि भयौं, त के भयो ? मेरो फोनमा तिम्रो तस्बिर राख्न छोडेको छैन्। तिम्रा आफन्तहरू संगको सम्बन्ध तोडेको छैन्। तिम्रा यादहरुले मलाई छोडेको छैन्। मैले अन्तै सम्बन्ध जोडेको छैन्। अझै भनु? तिमी अर्कैकि भयौं, त के भयो ? म त अर्कैको भएको छैन ... समाप्त`,
  `संसार रुपी सुख स्वर्गभित्र, रमें रमाएँ लिइ भित्र चित्र। सारा भयो त्यो मरुभूमि तुल्य, रातै परे झैं अब बुझ्छु बल्ल। रहेछ संसार निशा समान, आएन ज्यूँदै रहँदा नि ज्ञान। आखिर रहेछ श्रीकृष्ण एक, न भक्ति भो, ज्ञान, नभो विवेक। महामरुमा कण झैं म तातो, जलेर मर्दो बिन आश लाटो। सुकी रहेको तरु झैं छु खाली, चिताग्नि तापी जल डाल्न फाली। संस्कार आफ्नो सब नै गुमाएँ, म शून्यमा शून्य सरी बिलाएँ। जन्मेँ म यो स्वर्गविषे पलाएँ, आखीर भै खाक त्यसै बिलाएँ। समाप्त`,
  `महाभूकम्पको क्षतिपछि पुनर्निर्माणका लागि आवश्यक स्रोत जुटाउन सरकारले असार १० मा गर्न लागेको दाता सम्मेलनमा भारत र चीनबाट माथिल्लोस्तरको सहभागिता गराउन गम्भीर चासो र कुटनीतिक पहल जारी राखेको छ । सम्मेलन सुरु हुन सात दिनमात्र बाँकी छ, तर नेपालका यी दुई ठूला छिमेकी मुलुकबाट को–को आउछन् भन्ने बारेमा जानकारी आइसकेको छैन । अर्थमन्त्रालय वैदेशीक महाशाखाका प्रमुख मधु मरासिनी शुक्रबारसम्ममा सम्मेलनमा को–को सहभागि हुने छन् भन्ने थाहा हुन सक्ने जानकारी दिए । सम्मेलनमा विभिन्न ६० मुलुक, तिनका सहयोग निकाय, दातृ निकायलगायतको सहभागी हुने अपेक्षा सरकारको छ । समाप्त`,
  `त्यसैगरी अष्ट्रेलिया, अष्ट्रिया, बेल्जियम, ब्राजिल, डेनमार्क, संयुक्त अधिराज्य, फिनल्यान्ड, फ्रान्स, जर्मनी, इजरायल, जापान, स्वीडेन, स्वीट्जरल्याण्ड, थाइल्याण्ड, नेदरल्याण्ड, संयुक्त राज्य अमेरिका, पोल्याण्ड, न्यूजील्याण्डलगायत देशले सोमवारसम्म सम्मेलनमा सहभागिता हुने प्रतिबद्धता व्यक्त गरिसकेका छन् । केही राष्ट्रले आउने मौखिक जानकारी दिए पनि निश्चित भने भएको छैन । समाप्त`,
  `हामी सन्तति हौं अगाध जलका ग्रीष्मर्तुको जन्म हो, हाम्रो जन्म हुँदा महोत्सव थियो, सारा उज्यालो सफा, हाँस्थे सूर्य र छालमा उछलिंदा टल्पल् गरी नाच्तथे, टाढासम्म हावा निमन्त्रित थिए, चल्थे बडा तेजले| हाम्रो व्योमविहारको मन थियो, ऊँचा थियो कामना, हामी सुस्त चढ्यौं सफा किरणका साना मसीना सिंढी। माथी-माथि चढ्यौं मिल्यौं र फिजियौंआकाशको क्षेत्रमा बोकी चल्छ हवा डुलाउन जगत् डाँडा, पुरी, जङ्गल।हेर्छौं दिव्य प्रदर्शिनी पृथिवीको, डाँडा र मैदानको खाल्डा, खोंच हिमालका र वनका नङ्गा र उद्यानका। नाला निर्मल नागबेलि जलका ती निर्झरी, झाडिका झुत्रा झोपडिका सफा सदनका प्रासादका, वीथिका।`
];
