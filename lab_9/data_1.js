        var data = [
{"from":[-87.8168698784778, 41.8401239984457],"to":[-89.418123, 43.0672902307],"labels":["Cook County", "Dane County"],"color":"#fd8d3c","value":407.0};
{"from":[-88.0035652992821, 42.3232404371298],"to":[-89.418123, 43.0672902307],"labels":["Lake County", "Dane County"],"color":"#fdae6b","value":103.0};
{"from":[-89.1608698772098, 42.3362622428946],"to":[-89.418123, 43.0672902307],"labels":["Winnebago County", "Dane County"],"color":"#e6550d","value":492.0};
{"from":[-89.7703990111108, 43.9695400853403],"to":[-89.418123, 43.0672902307],"labels":["Adams County", "Dane County"],"color":"#fd8d3c","value":260.0};
{"from":[-89.3337364031939, 43.4666080751546],"to":[-89.418123, 43.0672902307],"labels":["Columbia County", "Dane County"],"color":"#a63603","value":10219.0};
{"from":[-88.7075068327945, 43.4162950184849],"to":[-89.418123, 43.0672902307],"labels":["Dodge County", "Dane County"],"color":"#a63603","value":2340.0};
{"from":[-88.4882632497673, 43.753589459404],"to":[-89.418123, 43.0672902307],"labels":["Fond du Lac County", "Dane County"],"color":"#fd8d3c","value":269.0};
{"from":[-90.7062205965479, 42.8674819333182],"to":[-89.418123, 43.0672902307],"labels":["Grant County", "Dane County"],"color":"#fd8d3c","value":408.0};
{"from":[-89.6022217896797, 42.6800089338777],"to":[-89.418123, 43.0672902307],"labels":["Green County", "Dane County"],"color":"#a63603","value":5452.0};
{"from":[-89.0448597224494, 43.8003789616371],"to":[-89.418123, 43.0672902307],"labels":["Green Lake County", "Dane County"],"color":"#fdae6b","value":111.0};
{"from":[-90.1353839732543, 43.0004744293601],"to":[-89.418123, 43.0672902307],"labels":["Iowa County", "Dane County"],"color":"#a63603","value":3253.0};
{"from":[-88.7758658170272, 43.0208142725708],"to":[-89.418123, 43.0672902307],"labels":["Jefferson County", "Dane County"],"color":"#a63603","value":5623.0};
{"from":[-90.1137919753067, 43.9246044535945],"to":[-89.418123, 43.0672902307],"labels":["Juneau County", "Dane County"],"color":"#fdae6b","value":159.0};
{"from":[-90.1317222243811, 42.6604994119369],"to":[-89.418123, 43.0672902307],"labels":["Lafayette County", "Dane County"],"color":"#e6550d","value":520.0};
{"from":[-89.3987491446669, 43.819581774261],"to":[-89.418123, 43.0672902307],"labels":["Marquette County", "Dane County"],"color":"#e6550d","value":542.0};
{"from":[-87.9667637001301, 43.0071308684847],"to":[-89.418123, 43.0672902307],"labels":["Milwaukee County", "Dane County"],"color":"#e6550d","value":878.0};
{"from":[-88.4649322247608, 44.4160918788177],"to":[-89.418123, 43.0672902307],"labels":["Outagamie County", "Dane County"],"color":"#fd8d3c","value":233.0};
{"from":[-87.9508181871426, 43.3840360485977],"to":[-89.418123, 43.0672902307],"labels":["Ozaukee County", "Dane County"],"color":"#fdae6b","value":139.0};
{"from":[-90.4294834073265, 43.3756406226935],"to":[-89.418123, 43.0672902307],"labels":["Richland County", "Dane County"],"color":"#fd8d3c","value":463.0};
{"from":[-89.0715662816089, 42.6712246485331],"to":[-89.418123, 43.0672902307],"labels":["Rock County", "Dane County"],"color":"#a63603","value":9427.0};
{"from":[-89.9482167163182, 43.4266633628893],"to":[-89.418123, 43.0672902307],"labels":["Sauk County", "Dane County"],"color":"#a63603","value":4377.0};
{"from":[-88.541903638495, 42.6684868025307],"to":[-89.418123, 43.0672902307],"labels":["Walworth County", "Dane County"],"color":"#e6550d","value":686.0};
{"from":[-88.2307627580914, 43.36847996915],"to":[-89.418123, 43.0672902307],"labels":["Washington County", "Dane County"],"color":"#fd8d3c","value":358.0};
{"from":[-88.3045083591275, 43.0182144837267],"to":[-89.418123, 43.0672902307],"labels":["Waukesha County", "Dane County"],"color":"#e6550d","value":1506.0};
{"from":[-88.6446586586024, 44.0688768406818],"to":[-89.418123, 43.0672902307],"labels":["Winnebago County", "Dane County"],"color":"#fdae6b","value":165.0};
{"from":[-90.0415491725536, 44.4553312968738],"to":[-89.418123, 43.0672902307],"labels":["Wood County", "Dane County"],"color":"#fdae6b","value":118.0}];

        

        data = data.map(item => { return {...item, value: parseInt(Math.random()*20)}});