jQuery("#simulation")
  .on("click", ".s-81136910-6c78-40eb-b929-e5b8885c0e77 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_2")) {
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
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Input_text_1","#s-Check_2","#s-Text_7","#s-Button_2","#s-Text_2","#s-Paragraph_3","#s-Check_3","#s-Text_3","#s-Text_6","#s-Rectangle_1","#s-Check_1","#s-Radio_group_1","#s-Text_4","#s-Text_5" ],
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
                    "target": [ "#s-Text_7","#s-Check_3","#s-Rectangle_1" ]
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
                    "target": [ "#s-Input_text_1","#s-Check_2","#s-Text_7","#s-Button_2","#s-Text_2","#s-Paragraph_3","#s-Check_3","#s-Text_3","#s-Text_6","#s-Rectangle_1","#s-Check_1","#s-Radio_group_1","#s-Text_4","#s-Text_5" ]
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