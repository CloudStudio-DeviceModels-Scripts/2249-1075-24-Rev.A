function getConfiguration(config) 
{ 
	config.addressLabel = {en: "Número de Serie", es: "Número de Serie"};
}

function getEndpoints(deviceAddress, endpoints)
{
  // Temperaturas 
  endpoints.addEndpoint("1", "Temperatura Acumulador ACS", endpointType.temperatureSensor);
  endpoints.addEndpoint("2", "Temperatura Agua Fría", endpointType.temperatureSensor);
  endpoints.addEndpoint("3", "Temperatura Retorno ACS", endpointType.temperatureSensor);
  endpoints.addEndpoint("4", "Temperatura Retorno Calderas", endpointType.temperatureSensor);
  endpoints.addEndpoint("5", "Temperatura Impulsión Caldera 2", endpointType.temperatureSensor);
  endpoints.addEndpoint("6", "Temperatura Impulsión Caldera 1", endpointType.temperatureSensor);
  var n0 = endpoints.addEndpoint("7", "Concentración Cloro", endpointType.genericSensor);
  n0.variableTypeId = 1412;
  var n0x = endpoints.addEndpoint("8", "Nº Horas Func. Caldera 2", endpointType.genericSensor);
  n0x.variableTypeId = 1417;
  var n1x = endpoints.addEndpoint("9", "Nº Horas Func. Caldera 1", endpointType.genericSensor);
  n1x.variableTypeId = 1417;
  var n2x = endpoints.addEndpoint("10", "Nº Arranques Caldera 1", endpointType.genericSensor);
  n2x.variableTypeId = 1418;
  var n3x = endpoints.addEndpoint("11", "Nº Arranques Caldera 2", endpointType.genericSensor);
  n3x.variableTypeId = 1418;

   //Alarmas
  var n1 = endpoints.addEndpoint("12", "Térmico B. Caldera 1", endpointType.genericSensor);
  n1.variableTypeId = 1410;
  var n2 = endpoints.addEndpoint("13", "Térmico B. Caldera 2", endpointType.genericSensor);
  n2.variableTypeId = 1410;
  var n3 = endpoints.addEndpoint("14", "Térmico B. Primario", endpointType.genericSensor);
  n3.variableTypeId = 1410;
  var n4 = endpoints.addEndpoint("15", "Disparo Seta de Emergencia", endpointType.genericSensor);
  n4.variableTypeId = 1419;

  //Alarmas
  var n5 = endpoints.addEndpoint("16", "MP B1 Caldera 1", endpointType.genericSensor);
  n5.variableTypeId = 1411;
  var n6 = endpoints.addEndpoint("17", "MP B2 Caldera 1", endpointType.genericSensor);
  n6.variableTypeId = 1411;
  var n7 = endpoints.addEndpoint("18", "MP B1 Caldera 2", endpointType.genericSensor); 
  n7.variableTypeId = 1411;
  var n8 = endpoints.addEndpoint("19", "MP B2 Caldera 2", endpointType.genericSensor); 
  n8.variableTypeId = 1411;
  var n9 = endpoints.addEndpoint("20", "MP B1 Primario", endpointType.genericSensor); 
  n9.variableTypeId = 1411;
  var n10 = endpoints.addEndpoint("21", "MP B2 Primario", endpointType.genericSensor); 
  n10.variableTypeId = 1411;
  var n11 = endpoints.addEndpoint("22", "MP Caldera 1", endpointType.genericSensor); 
  n11.variableTypeId = 1411;
  var n12 = endpoints.addEndpoint("23", "MP Caldera 2", endpointType.genericSensor); 
  n12.variableTypeId = 1411;
  var n13 = endpoints.addEndpoint("24", "MP B1 Retorno ACS", endpointType.genericSensor); 
  n13.variableTypeId = 1411;
  var n14 = endpoints.addEndpoint("25", "MP B2 Retorno ACS", endpointType.genericSensor); 
  n14.variableTypeId = 1411;
  var n15 = endpoints.addEndpoint("26", "MP B1 Secundario", endpointType.genericSensor); 
  n15.variableTypeId = 1411;
  var n16 =  endpoints.addEndpoint("27", "MP B2 Secundario", endpointType.genericSensor); 
  n16.variableTypeId = 1411;
  var n17 = endpoints.addEndpoint("28", "Válv. 3v Caldera 1", endpointType.genericSensor); 
  n17.variableTypeId = 1411;
 
  // MP
   var n29 = endpoints.addEndpoint("29", "Válv. 3v Caldera 2", endpointType.genericSensor); 
   n29.variableTypeId = 1411;
   var n30 = endpoints.addEndpoint("30", "Señal Detec.Flujo Caldera 1", endpointType.genericSensor); 
   n30.variableTypeId = 1411;
   var n31 = endpoints.addEndpoint("31", "Señal Detec.Flujo Caldera 2", endpointType.genericSensor); 
   n31.variableTypeId = 1411;
   var n32 = endpoints.addEndpoint("32", "Forzado auto ACS", endpointType.genericSensor); 
   n32.variableTypeId = 1411;

  //Alarmas
  var n33 = endpoints.addEndpoint("33", "Alarma Cloro bajo", endpointType.genericSensor); 
  n33.variableTypeId = 1410;

   // MP
   var n34 = endpoints.addEndpoint("34", "Alarma Cloro alto", endpointType.genericSensor); 
   n34.variableTypeId = 1410;
   var n35 = endpoints.addEndpoint("35", "MP B1 Secundario PLC2", endpointType.genericSensor); 
   n35.variableTypeId = 1411;
   var n36 = endpoints.addEndpoint("36", "MP B2 Secundario PLC2", endpointType.genericSensor); 
   n36.variableTypeId = 1411;
   var n37 = endpoints.addEndpoint("37", "MP B1 Retorno ACS PLC2", endpointType.genericSensor); 
   n37.variableTypeId = 1411;
   var n38 = endpoints.addEndpoint("38", "MP B2 Retorno ACS PLC2", endpointType.genericSensor); 
   n38.variableTypeId = 1411;

   // Consignas
  endpoints.addEndpoint("39", "Consigna Caldera", endpointType.temperatureSensor);
  endpoints.addEndpoint("40", "Consigna ACS", endpointType.temperatureSensor);
  endpoints.addEndpoint("41", "Consigna Retorno ACS", endpointType.temperatureSensor);
}

function updateDeviceUIRules(device, rules)
{
  rules.canCreateEndpoints = true;
}

function updateEndpointUIRules(endpoint, rules)
{
  rules.canDelete = true;
  rules.canEditSubtype = false;
}