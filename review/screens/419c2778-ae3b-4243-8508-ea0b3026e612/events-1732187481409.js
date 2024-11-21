jQuery("#simulation")
  .on("click", ".s-419c2778-ae3b-4243-8508-ea0b3026e612 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/5b506daf-a620-47ad-85aa-bc857db6fcff",
                    "transition": {
                      "type": "fade",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Image_1","#s-Text_2","#s-Line_1","#s-Image_7","#s-Image_6","#s-Image_11","#s-Rectangle_1","#s-Image_5","#s-Image_9","#s-Image_3","#s-Input_text_1","#s-Image_4","#s-Rectangle_5","#s-Image_10","#s-Rectangle_3","#s-Rectangle_4","#s-Text_1","#s-Image_8","#s-Image_2","#s-Rectangle_6" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Input_text_2","#s-Check_2","#s-Text_9","#s-Button_2","#s-Text_4","#s-Text_10","#s-Check_3","#s-Text_5","#s-Text_8","#s-Rectangle_7","#s-Check_1","#s-Radio_group_1","#s-Text_6","#s-Text_7" ],
                    "effect": {
                      "type": "clip",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Text_9","#s-Check_3","#s-Rectangle_7" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Input_text_2","#s-Check_2","#s-Text_9","#s-Button_2","#s-Text_4","#s-Text_10","#s-Check_3","#s-Text_5","#s-Text_8","#s-Rectangle_7","#s-Check_1","#s-Radio_group_1","#s-Text_6","#s-Text_7" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Image_1","#s-Text_2","#s-Line_1","#s-Image_7","#s-Image_6","#s-Image_11","#s-Rectangle_1","#s-Image_5","#s-Image_9","#s-Image_3","#s-Input_text_1","#s-Image_4","#s-Rectangle_5","#s-Image_10","#s-Rectangle_3","#s-Rectangle_4","#s-Text_1","#s-Image_8","#s-Image_2","#s-Rectangle_6" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_3")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "datatype": "property",
                "target": "#s-Rectangle_8",
                "property": "jimIsVisible"
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Button_9","#s-Button_7","#s-Button_13","#s-Button_12","#s-Button_8","#s-Button_6","#s-Button_10","#s-Button_11","#s-Button_5","#s-Rectangle_8" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Button_9","#s-Button_7","#s-Button_13","#s-Button_12","#s-Button_8","#s-Button_6","#s-Button_10","#s-Button_11","#s-Button_5","#s-Rectangle_8" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_4")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "datatype": "property",
                "target": "#s-Rectangle_8",
                "property": "jimIsVisible"
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Button_9","#s-Button_7","#s-Button_13","#s-Button_12","#s-Button_8","#s-Button_6","#s-Button_10","#s-Button_11","#s-Button_5","#s-Rectangle_8" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Button_9","#s-Button_7","#s-Button_13","#s-Button_12","#s-Button_8","#s-Button_6","#s-Button_10","#s-Button_11","#s-Button_5","#s-Rectangle_8" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/5b506daf-a620-47ad-85aa-bc857db6fcff"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  });