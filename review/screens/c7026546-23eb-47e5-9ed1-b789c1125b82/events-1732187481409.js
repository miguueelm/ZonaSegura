jQuery("#simulation")
  .on("click", ".s-c7026546-23eb-47e5-9ed1-b789c1125b82 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_1")) {
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
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/e2dff015-37e8-44a6-a3c2-d9ac0cfbf00b"
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
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Check_2","#s-Text_9","#s-Text_10","#s-Input_text_1","#s-Radio_group_1","#s-Check_1","#s-Text_8","#s-Text_12","#s-Text_11","#s-Text_7","#s-Button_3","#s-Rectangle_4","#s-Check_3","#s-Text_6" ],
                    "effect": {
                      "type": "clip",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-iFrame_2","#s-Text_5","#s-Text_4","#s-Text_2","#s-Text_1","#s-Rectangle_2","#s-Button_1","#s-iFrame_1","#s-Rectangle_1","#s-Rectangle_3","#s-iFrame_3","#s-Text_3" ]
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
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Check_2","#s-Text_9","#s-Text_10","#s-Input_text_1","#s-Radio_group_1","#s-Check_1","#s-Text_8","#s-Text_12","#s-Text_11","#s-Text_7","#s-Button_3","#s-Rectangle_4","#s-Check_3","#s-Text_6" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-iFrame_2","#s-Text_4","#s-Text_2","#s-Text_1","#s-Rectangle_2","#s-Button_1","#s-iFrame_1","#s-Rectangle_1","#s-Rectangle_3","#s-iFrame_3","#s-Text_3" ]
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
                "target": "#s-Rectangle_6",
                "property": "jimIsVisible"
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Button_10","#s-Button_8","#s-Button_14","#s-Button_13","#s-Button_9","#s-Button_7","#s-Button_11","#s-Button_12","#s-Button_6","#s-Rectangle_6" ]
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
                    "target": [ "#s-Button_10","#s-Button_8","#s-Button_14","#s-Button_13","#s-Button_9","#s-Button_7","#s-Button_11","#s-Button_12","#s-Button_6","#s-Rectangle_6" ]
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
              "condition": {
                "datatype": "property",
                "target": "#s-Rectangle_6",
                "property": "jimIsVisible"
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Button_10","#s-Button_8","#s-Button_14","#s-Button_13","#s-Button_9","#s-Button_7","#s-Button_11","#s-Button_12","#s-Button_6","#s-Rectangle_6" ]
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
                    "target": [ "#s-Button_10","#s-Button_8","#s-Button_14","#s-Button_13","#s-Button_9","#s-Button_7","#s-Button_11","#s-Button_12","#s-Button_6","#s-Rectangle_6" ]
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
    } else if(jFirer.is("#s-Button_7")) {
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