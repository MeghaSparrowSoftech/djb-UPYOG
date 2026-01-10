// export const orgStructureData = {
//   title: "Chairperson",
//   children: [
//     {
//       title: "Vice Chairperson",
//       children: [
//         {
//           title: "Chief Executive Officer",
//           children: [
//             /* ================= NON-OFFICIAL MEMBERS ================= */
//             {
//               title: "Non-Official Members",
//               children: [
//                 /* ---------- ADMIN ---------- */
//                 {
//                   title: "Members (Admin)",
//                   children: [
//                     {
//                       title: "Director (Admin)",
//                       children: [
//                         {
//                           title: "Consultant (PR)",
//                           children: [{ title: "DTQC" }]
//                         },
//                         { title: "ACs" },
//                         {
//                           title: "Jt. Director (F&A)",
//                           children: [{ title: "DD (F&A)" }]
//                         },
//                         { title: "DD (LWO)" },
//                         { title: "LO (W)" },
//                         { title: "DD (Training)" }
//                       ]
//                     }
//                   ]
//                 },

//                 /* ---------- FINANCE ---------- */
//                 {
//                   title: "Members (Finance)",
//                   children: [
//                     {
//                       title: "Director (Finance / Addl. CEO)",
//                       children: [
//                         { title: "System Admin" },
//                         {
//                           title: "Jt. Director (Revenue)",
//                           children: [{ title: "SE (IT)" }]
//                         },
//                         { title: "R.P.C Cell" },
//                         {
//                           title: "EE (Mapping)",
//                           children: [
//                             { title: "AE (Mapping)" },
//                             { title: "JE (Mapping)" }
//                           ]
//                         },
//                         {
//                           title: "EE (EDP)",
//                           children: [
//                             { title: "AE (EDP)" },
//                             { title: "JE (EDP)" }
//                           ]
//                         }
//                       ]
//                     }
//                   ]
//                 },

//                 /* ---------- WATER SUPPLY ---------- */
//                 {
//                   title: "Members (W.S.)",
//                   children: [
//                     {
//                       title: "Director (Revenue)",
//                       children: [
//                         {
//                           title: "Dy. Director (Revenue)",
//                           children: [{ title: "ZROs" }]
//                         },
//                         {
//                           title: "Director (Enforcement)",
//                           children: [
//                             {
//                               title: "Jt. Director (Enf.)",
//                               children: [{ title: "DD (Enf.)" }]
//                             },
//                             { title: "Bottling Plant" }
//                           ]
//                         }
//                       ]
//                     }
//                   ]
//                 },

//                 /* ---------- DRAINAGE ---------- */
//                 {
//                   title: "Members (Drainage)",
//                   children: [
//                     {
//                       title: "CE (Civil)",
//                       children: [
//                         {
//                           title: "SE (Civil)",
//                           children: [
//                             {
//                               title: "EE (Civil)",
//                               children: [
//                                 {
//                                   title: "AE (Civil)",
//                                   children: [{ title: "JE (Civil)" }]
//                                 }
//                               ]
//                             }
//                           ]
//                         }
//                       ]
//                     },
//                     {
//                       title: "CE (E&M)",
//                       children: [
//                         {
//                           title: "SE (E&M)",
//                           children: [
//                             {
//                               title: "EE (E&M)",
//                               children: [
//                                 {
//                                   title: "AE (E&M)",
//                                   children: [{ title: "JE (E&M)" }]
//                                 }
//                               ]
//                             }
//                           ]
//                         }
//                       ]
//                     }
//                   ]
//                 }
//               ]
//             },

//             /* ================= EX-OFFICIAL MEMBERS ================= */
//             {
//               title: "Ex-Official Members",
//               children: [
//                 {
//                   title: "CVO",
//                   children: [{ title: "CCR" }]
//                 },
//                 {
//                   title: "Secretary DJB",
//                   children: [
//                     {
//                       title: "Director (Vigilance)",
//                       children: [{ title: "Dy. Director" }]
//                     },
//                     {
//                       title: "RIT",
//                       children: [
//                         {
//                           title: "SE",
//                           children: [
//                             {
//                               title: "EE (Civil)",
//                               children: [
//                                 {
//                                   title: "AE (Civil)",
//                                   children: [{ title: "JE (Civil)" }]
//                                 }
//                               ]
//                             },
//                             {
//                               title: "EE (E&M)",
//                               children: [
//                                 {
//                                   title: "AE (E&M)",
//                                   children: [{ title: "JE (E&M)" }]
//                                 }
//                               ]
//                             }
//                           ]
//                         }
//                       ]
//                     }
//                   ]
//                 }
//               ]
//             }
//           ]
//         }
//       ]
//     }
//   ]
// };


// Complete Delhi Jal Board Organizational Structure
export const orgStructureData = {
  title: "Chairperson",
  children: [
    {
      title: "Vice Chairperson",
      children: [
        {
          title: "Non official Members",
          children: [
            // Members (Admin) Branch
            {
              title: "Members (Admin)",
              children: [
                {
                  title: "Director (Admin)",
                  children: [
                    {
                      title: "Conslt. (PR)",
                      children: [
                        { title: "DTQC" }
                      ]
                    },
                    { title: "AC's" },
                    {
                      title: "Jt. Dir. (F&A)",
                      children: [
                        { title: "DD (F&A)" }
                      ]
                    },
                    { title: "DD (LWO)" },
                    { title: "LO (W)" },
                    { title: "DD (Training.)" }
                  ]
                }
              ]
            },
            // Members (Finance) Branch
            {
              title: "Members (Finance)",
              children: [
                {
                  title: "Director (Finance/ Addl. CEO)",
                  children: [
                    { title: "System Admin." },
                    {
                      title: "Jt. Dir. (Revenue)",
                      children: [
                        { title: "SE (IT)" }
                      ]
                    },
                    { title: "R. P. C Cell" },
                    {
                      title: "EE (Mapping)",
                      children: [
                        { title: "AE (Mapping)" },
                        { title: "JE (Mapping)" }
                      ]
                    },
                    {
                      title: "EE (EDP)",
                      children: [
                        { title: "AE (EDP)" },
                        { title: "JE (EDP)" }
                      ]
                    }
                  ]
                }
              ]
            },
            // Members (W.S.) Branch
            {
              title: "Members (W.S.)",
              children: [
                {
                  title: "Director (Revenue)",
                  children: [
                    {
                      title: "Director (Enforc.)",
                      children: [
                        {
                          title: "Dy. Dir. (Revenue)",
                          children: [
                            { title: "ZROs" }
                          ]
                        },
                        {
                          title: "Jt. Dir. (Enf.)",
                          children: [
                            { title: "DD (Enf.)" }
                          ]
                        },
                        { title: "BOTTLING PLANT" }
                      ]
                    }
                  ]
                }
              ]
            },
            // Members (Drainage) Branch
            {
              title: "Members (Drainage)",
              children: [
                {
                  title: "CE 's (Civil)",
                  children: [
                    {
                      title: "CE (Civil)",
                      children: [
                        {
                          title: "CE's (Civil)",
                          children: [
                            {
                              title: "SE's (Civil)",
                              children: [
                                {
                                  title: "EE (Civil)",
                                  children: [
                                    {
                                      title: "AE (Civil)",
                                      children: [
                                        { title: "JE (Civil)" }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  title: "CE 's (E&M)",
                  children: [
                    {
                      title: "CE (Cons.) (CIVIL)",
                      children: [
                        {
                          title: "SE (Cons.) (Civil)",
                          children: [
                            {
                              title: "SE's (E&M)",
                              children: [
                                {
                                  title: "EE (E&M)",
                                  children: [
                                    {
                                      title: "AE (E&M)",
                                      children: [
                                        { title: "JE (E&M)" }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      title: "CE (Cons.) (E&M)",
                      children: [
                        {
                          title: "SE (Cons.) (E&M)",
                          children: [
                            {
                              title: "DDH (W)",
                              children: [
                                {
                                  title: "EE (Civil)",
                                  children: [
                                    {
                                      title: "AE (Civil)",
                                      children: [
                                        { title: "JE (Civil)" }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              title: "EE (E&M)",
                              children: [
                                {
                                  title: "AE (E&M)",
                                  children: [
                                    { title: "JE (E&M)" }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: "Chief Ex. Officer",
          children: [
            // Ex-Official Members Branch
            {
              title: "Ex- Official Members",
              children: [
                {
                  title: "CVO",
                  children: [
                    { title: "CCR" }
                  ]
                },
                {
                  title: "Secy. DJB",
                  children: [
                    {
                      title: "Director (Vigilance)",
                      children: [
                        { title: "Dy. Dir." }
                      ]
                    },
                    {
                      title: "RTI",
                      children: [
                        { title: "SE" }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};