// JSON-Datei
const data = {
    "pages": [
        {
            "id": 0,
            "title": "Vorwort",
            "introduction": "Der Zweck dieser ergänzenden Umfrage besteht darin, organisatorische und betriebliche Sicherheitslücken zu identifizieren, die zusätzlich zu den technischen Aspekten durch den Penetrationstest untersucht werden. Die von Ihnen bereitgestellten Informationen ermöglichen es uns, umfassende Sicherheitsmaßnahmen vorzuschlagen, die sowohl technische als auch unbemerkte Probleme aufdecken und eine umfassendere Sicherheitsbewertung gewährleisten. Ihre detaillierten Antworten sind entscheidend für die Vorbereitung und Durchführung eines effektiven Audits. Jede Information, die Sie uns zur Verfügung stellen, trägt dazu bei, die Sicherheit Ihrer Systeme und Daten zu verbessern.",
            "questions": []
        },
        {
            "id": 1,
            "title": "1.1 Angriffserkennung und -vermeidung",
            "questions": [
                {
                    "id": "q1_1_1",
                    "text": "Gibt es etablierte und dokumentierte Prozesse zur Vermeidung und Beseitigung von Angriffen und Vorfällen?",
                    "answers": [
                        { "text": "Es gibt grundlegende, informelle Prozesse.", "value": 1 },
                        { "text": "Es existieren dokumentierte und wiederholbare Prozesse.", "value": 2 },
                        { "text": "Prozesse werden regelmäßig überprüft, angepasst und auf ihre Effizienz hin gemessen.", "value": 3 }
                    ]
                },
                {
                    "id": "q1_1_2",
                    "text": "Sind die Rollen für die Erkennung, Vermeidung und Beseitigung von Angriffen und Vorfällen klar definiert?",
                    "answers": [
                        { "text": "Es gibt klare, aber informelle Zuständigkeiten oder werden spontan verteilt.", "value": 1 },
                        { "text": "Die Rollen und Verantwortlichkeiten sind in der Organisation formell zugewiesen, z. B. an ein SOC, Blue-Team oder die IT-Abteilung.", "value": 2 },
                        { "text": "Die Verantwortlichkeiten werden regelmäßig überprüft und an die aktuelle Bedrohungslage angepasst.", "value": 3 }
                    ]
                },
                {
                    "id": "q1_1_3",
                    "text": "Werden Security Information and Event Management (SIEM)-Systeme eingesetzt?",
                    "answers": [
                        { "text": "Nein / Das SIEM-System wird rudimentär oder manuell eingerichtet.", "value": 1 },
                        { "text": "Die SIEM-Systeme werden formell in den täglichen Betrieb integriert.", "value": 2 },
                        { "text": "Die Effizienz und die Erkennungsrate werden regelmäßig überprüft und das SIEM-System wird kontinuierlich weiterentwickelt.", "value": 3 }
                    ]
                },
                {
                    "id": "q1_1_4",
                    "text": "Werden Intrusion Detection Systeme (IDS) eingesetzt?",
                    "answers": [
                        { "text": "Nein", "value": 1 },
                        { "text": "Teilweise", "value": 2 },
                        { "text": "Ja", "value": 3 }
                    ]
                },
                {
                    "id": "q1_1_5",
                    "text": "Wie wird auf Verdachtsmomente und Vorfälle reagiert?",
                    "answers": [
                        { "text": "Das IDS ist sporadisch oder experimentell im Einsatz.", "value": 1 },
                        { "text": "Das IDS wird formell genutzt und wird regelmäßig aktualisiert.", "value": 2 },
                        { "text": "Die Effektivität des IDS wird regelmäßig überprüft, und es erfolgt eine automatische Anpassung an neue Bedrohungen.", "value": 3 }
                    ]
                },
                {
                    "id": "q1_1_6",
                    "text": "Nutzen Sie Threat Intelligence Feeds?",
                    "answers": [
                        { "text": "Nein / Threat Intelligence Feeds werden nur informell genutzt oder adhoc bezogen.", "value": 1 },
                        { "text": "Es gibt einen standardisierten Prozess zur Integration von Threat Feeds in die Sicherheitsprozesse.", "value": 2 },
                        { "text": "Threat Intelligence Feeds werden regelmäßig auf ihre Relevanz und Qualität überprüft und angepasst.", "value": 3 }
                    ]
                },
                {
                    "id": "q1_1_7",
                    "text": "Wird eine Antiviren Software eingesetzt?",
                    "answers": [
                        { "text": "Nein / Die Antivirensoftware wird sporadisch aktualisiert und konfiguriert.", "value": 1 },
                        { "text": "Es gibt definierte Prozesse für die Verwaltung und Überwachung der Antiviren Software.", "value": 2 },
                        { "text": "Die Effektivität der Antiviren Software und der Sandbox-Umgebung wird regelmäßig getestet und angepasst.", "value": 3 }
                    ]
                },
                {
                    "id": "q1_1_8",
                    "text": "Wie erfolgt das Logging? / Wie werden die Logs ausgewertet und archiviert?",
                    "answers": [
                        { "text": "Die Logs werden manuell geprüft und sporadisch ausgewertet.", "value": 1 },
                        { "text": "Es gibt automatische Log-Prozesse und regelmäßige Auswertungen.", "value": 2 },
                        { "text": "Logs werden automatisch ausgewertet, KPIs werden gemessen und Prozesse regelmäßig angepasst.", "value": 3 }
                    ]
                },
                {
                    "id": "q1_1_9",
                    "text": "Welche zusätzlichen Monitoring-Strategien und -Abläufe sind implementiert?",
                    "answers": [
                        { "text": "Das Monitoring ist manuell und reaktiv.", "value": 1 },
                        { "text": "Es existieren standardisierte Prozesse zur kontinuierlichen Überwachung kritischer Systeme.", "value": 2 },
                        { "text": "Die Monitoring Strategien werden regelmäßig auf Basis von KPIs und Bedrohungsanalysen angepasst.", "value": 3 }
                    ]
                },
                {
                    "id": "q1_1_10",
                    "text": "Wie ist der Kommunikationsprozess während eines Sicherheitsvorfalls organisiert?",
                    "answers": [
                        { "text": "Die Kommunikation ist im Krisenfall improvisiert und ungeplant.", "value": 1 },
                        { "text": "Es gibt einen definierten Kommunikationsplan mit festgelegten Eskalationswegen.", "value": 2 },
                        { "text": "Die Effizienz der Kommunikationsprozesse werden regelmäßig überprüft und angepasst.", "value": 3 }
                    ]
                },
                {
                    "id": "q1_1_11",
                    "text": "Werden Vorfälle, ihre Abläufe und Beseitigungsmaßnahmen dokumentiert und analysiert?",
                    "answers": [
                        { "text": "Vorfälle werden nur sporadisch dokumentiert und analysiert.", "value": 1 },
                        { "text": "Es gibt formelle Prozesse zur Dokumentation und Analyse von Vorfällen.", "value": 2 },
                        { "text": "Die Erkenntnisse aus Vorfällen werden systematisch genutzt, um Prozesse und Maßnahmen anzupassen.", "value": 3 }
                    ]
                }
            ]
        },
        {
            "id": 2,
            "title": "1.2 Backup und Wiederherstellung",
            "questions": [
                {
                    "id": "q1_2_1",
                    "text": "Gibt es etablierte und dokumentierte Prozesse zu Backup und Wiederherstellung?",
                    "answers": [
                        { "text": "Es gibt informelle und nur teilweise dokumentierte Prozesse für Backups und Wiederherstellung.", "value": 1 },
                        { "text": "Es ist eine formelle Strategie oder ein Desaster-Recovery-Plan dokumentiert und regelmäßig im Einsatz.", "value": 2 },
                        { "text": "Es werden die Backup- und Wiederherstellungsprozesse regelmäßig getestet, überwacht und kontinuierlich verbessert.", "value": 3 }
                    ]
                },
                {
                    "id": "q1_2_2",
                    "text": "Wie wird gesichert?",
                    "answers": [
                        { "text": "Es werden nur die wesentlichen Daten gesichert und die Sicherheit erfolgt unregelmäßig.", "value": 1 },
                        { "text": "Es gibt formelle Kategorisierung von Daten, die regelmäßig gesichert werden.", "value": 2 },
                        { "text": "Es wird regelmäßig überprüft ob alle kritischen Daten zuverlässig gesichert werden, und die Prozesse werden angepasst, um neue Anforderungen zu integrieren.", "value": 3 }
                    ]
                },
                {
                    "id": "q1_2_3",
                    "text": "Wie erfolgt die Wiederherstellung?",
                    "answers": [
                        { "text": "Die Wiederherstellung erfolgt adhoc oder nur auf Anfrage, ohne standardisierte Prozeduren.", "value": 1 },
                        { "text": "Es gibt klar definierte und dokumentierte Wiederherstellungsprozesse für verschiedene Ausfallszenarien.", "value": 2 },
                        { "text": "", "value": 3 }
                    ]
                },
                {
                    "id": "q1_2_4",
                    "text": "Werden Ausfallsituationen und Wiederherstellung simuliert und inwiefern werden unterschiedliche Ausfallszenarien (Teil- oder Komplettausfall, Datensicherheitsvorfälle, etc.) berücksichtigt?",
                    "answers": [
                        { "text": "Es gibt nur selten oder gar keine Simulationen von Ausfallsituationen.", "value": 1 },
                        { "text": "Simulationen werden regelmäßig durchgeführt, um die Funktionsfähigkeit des Wiederherstellungsprozesses zu prüfen.", "value": 2 },
                        { "text": "Simulationen werden unter realistischen Bedingungen regelmäßig durchgeführt und die Ergebnisse systematisch ausgewertet, um die Prozesse zu optimieren.", "value": 3 }
                    ]
                },
                {
                    "id": "q1_2_5",
                    "text": "Wurde die Zeit zwischen einem Vorfall und der Betriebsbereitschaft bzw. der vollen Wiederherstellung gemessen?",
                    "answers": [
                        { "text": "Es gibt keine formale Messung der Wiederherstellungszeiten (RTO, RPO).", "value": 1 },
                        { "text": "Die Wiederherstellungszeiten sind dokumentiert und bekannt.", "value": 2 },
                        { "text": "Die RTO (Recovery Time Objective) und RPO (Recovery Point Objective) werden regelmäßig gemessen und optimiert, um die Geschäftskontinuität zu gewährleisten.", "value": 3 }
                    ]
                },
                {
                    "id": "q1_2_6",
                    "text": "Wie wird die Integrität und Sicherheit der Backups gewährleistet?",
                    "answers": [
                        { "text": "Es gibt rudimentäre Maßnahmen, um die Integrität der Backups zu gewährleisten (z.B. sporadische Validierung).", "value": 1 },
                        { "text": "Es existieren formelle Prozesse zur Sicherstellung der Backup-Integrität, wie regelmäßige Überprüfungen auf Datenintegrität und vollständige Verschlüsselung der Backups.", "value": 2 },
                        { "text": "Es werden automatisierte Prozesse zur Validierung und Überwachung der Backup-Integrität eingesetzt um die Sicherheit (z.B. Verschlüsselung, Zugriffskontrolle) kontinuierlich überwacht und verbessert.", "value": 3 }
                    ]
                },
                {
                    "id": "q1_2_7",
                    "text": "Wie wird sichergestellt, dass Backup-Träger/Dateien nicht kontaminieren?",
                    "answers": [
                        { "text": "Es gibt keine oder nur minimale Maßnahmen, um die Kontamination von backup-Medien zu verhindern.", "value": 1 },
                        { "text": "Es werden Backup-Dateien auf Malware und andere Bedrohungen gescannt, bevor sie in das Backup-System integriert werden.", "value": 2 },
                        { "text": "Es gibt verschiedene Sicherheitsprotokolle und Isolationsmechanismen, um sicherzustellen, dass Backups nicht durch Schadsoftware oder unbefugte Zugriffe kompromittiert werden.", "value": 3 }
                    ]
                },
                {
                    "id": "q1_2_8",
                    "text": "Wie oft werden die Wiederherstellungsverfahren getestet und dokumentiert?",
                    "answers": [
                        { "text": "Die Wiederherstellungsverfahren werden nur sporadisch oder auf adhoc-Basis getestet.", "value": 1 },
                        { "text": "Es gibt festgelegte Intervalle für regelmäßige Tests der Wiederherstellungsverfahren, und diese werden dokumentiert.", "value": 2 },
                        { "text": "Die Wiederherstellungsverfahren werden kontinuierlich getestet, dokumentiert und in Echtzeit verbessert. Die Tests werden genutzt, um Schwachstellen zu identifizieren und den Recovery-Prozess zu optimieren.", "value": 3 }
                    ]
                },
                {
                    "id": "q1_2_9",
                    "text": "Wie lange wird die Datenaufbewahrung durchgeführt und welche Regularien beeinflussen diese?",
                    "answers": [
                        { "text": "Es gibt nur rudimentäre Richtlinien zur Datenaufbewahrung, die nicht regelmäßig überprüft werden.", "value": 1 },
                        { "text": "Es existieren formelle Richtlinien zur Datenaufbewahrung, die auf gesetzlichen Anforderungen oder Branchenstandards basieren.", "value": 2 },
                        { "text": "Die Aufbewahrungsfristen werden regelmäßig überprüft, um sicherzustellen, dass sie den geltenden Datenschutzgesetzen, -vorschriften (z.B. GDPR, ISO 27001) und internen Anforderungen entsprechen.", "value": 3 }
                    ]
                }
            ]
        },
        {
            "id": 3,
            "title": "1.3 Patch und Konfiguration Management",
            "questions": [
                {
                    "id": "q1_3_1",
                    "text": "Gibt es etablierte und dokumentierte Prozesse zum Patch und Konfiguration Management?",
                    "answers": [
                        { "text": "Es gibt keine formellen Prozesse, oder die Prozesse sind nur teilweise dokumentiert.", "value": 1 },
                        { "text": "Es ist ein standardisierter und dokumentierter Patch- und Konfigurationsmanagement-Prozess etabliert und in regelmäßiger Nutzung.", "value": 2 },
                        { "text": "Die Prozesse werden kontinuierlich überwacht und verbessert, und es gibt Automatisierungen zur Optimierung des Patch- und Konfigurationsmanagements.", "value": 3 }
                    ]
                },
                {
                    "id": "q1_3_2",
                    "text": "Wie werden die Verantwortungen verteilt und verwaltet?",
                    "answers": [
                        { "text": "Die Verantwortungen sind unklar oder nicht formal zugeordnet.", "value": 1 },
                        { "text": "Die Verantwortlichkeiten sind klar definiert und dokumentiert, z.B. in einem RACI-Modell (Responsible, Accountable, Consulted, Informed).", "value": 2 },
                        { "text": "Es gibt ein systematisches Rollenkonzept, das flexibel angepasst werden kann, und die Verantwortungen werden im ganzen Unternehmen transparent kommuniziert.", "value": 3 }
                    ]
                },
                {
                    "id": "q1_3_3",
                    "text": "Welche Prozesse gibt es zur Notfall-Patch-Verwaltung? Wie wird mit Zero-Day-Schwachstellen oder kritischen Patches umgegangen?",
                    "answers": [
                        { "text": "Es gibt keinen klaren Prozess für Notfall-Patches oder diese werden ad hoc behandelt.", "value": 1 },
                        { "text": "Die Notfall-Patch-Prozesse sind dokumentiert und werden in festgelegten Zeitfenstern umgesetzt.", "value": 2 },
                        { "text": "Es gibt automatisierte Prozesse zur Verteilung und Validierung von Notfall-Patches, die eng mit Threat Intelligence und Schwachstellenmanagement gekoppelt sind.", "value": 3 }
                    ]
                },
                {
                    "id": "q1_3_4",
                    "text": "Werden bei neuen Systemen die Standardkonfigurationen systematisch geändert und angepasst?",
                    "answers": [
                        { "text": "Standardkonfigurationen sind nur sporadisch oder gar nicht geändert.", "value": 1 },
                        { "text": "Es gibt eine systematische Überprüfung und Anpassung von Standardkonfigurationen bei neuen Systemen, um die Sicherheit und Leistung zu optimieren.", "value": 2 },
                        { "text": "Es werden automatisierte Skripte oder Tools eingesetzt, um Standardkonfigurationen effizient zu ändern und zu überwachen, basierend auf vordefinierten Sicherheits- und Leistungsrichtlinien.", "value": 3 }
                    ]
                },
                {
                    "id": "q1_3_5",
                    "text": "Wie erfolgt das Management von Konfigurationsänderungen? Testen vor Änderungen: Gibt es Prozesse zum Testen und Validieren von Änderungen, bevor diese in die Produktion übernommen werden?",
                    "answers": [
                        { "text": "Änderungen werden manuell und ohne formelle Freigabe- oder Testverfahren durchgeführt.", "value": 1 },
                        { "text": "Es gibt ein formelles Change-Management-System (z. B. ITIL-basiert) mit definierten Genehmigungs- und Testverfahren.", "value": 2 },
                        { "text": "Änderungen werden automatisch versioniert, getestet und kontinuierlich überwacht, um Konfigurationsabweichungen oder Fehler sofort zu erkennen und zu beheben.", "value": 3 }
                    ]
                },
                {
                    "id": "q1_3_6",
                    "text": "Wie werden veraltete oder nicht unterstützte Systeme verwaltet? Wie gehen Sie mit Legacy-Systemen um?",
                    "answers": [
                        { "text": "Veraltete Systeme werden ohne festgelegte Prozesse weiterverwendet, ohne Sicherheits- oder Leistungsbedenken systematisch zu addressieren.", "value": 1 },
                        { "text": "Es gibt definierte Prozesse für die Verwaltung und den Ersatz von Legacy-Systemen, sowie Maßnahmen zur Minimierung von Sicherheitsrisiken bei nicht unterstützten Systemen.", "value": 2 },
                        { "text": "Es gibt einen umfassenden Plan für das Lifecycle-Management von Systemen, der veraltete Systeme identifiziert und deren schrittweisen Ersatz oder Sicherung mittels spezifischer Maßnahmen (z. B. Segmentierung, Virtualisierung) vorsieht.", "value": 3 }
                    ]
                }
            ]
        },
        {
            "id": 4,
            "title": "1.4 Schwachstellenmanagement",
            "questions": [
                {
                    "id": "q1_4_1",
                    "text": "Wie erfassen und bewerten Sie Schwachstellen in Betriebssystemen und Anwendungen?",
                    "answers": [
                        { "text": "Es gibt keine regelmäßige Schwachstellenerfassung oder erfolgt nur sporadisch.", "value": 1 },
                        { "text": "Es werden regelmäßig Scans und manuelle Überprüfungen durchgeführt, um Schwachstellen in Betriebssystemen und Anwendungen zu identifizieren", "value": 2 },
                        { "text": "Es ist ein automatisierter Prozess etabliert, der kontinuierlich Schwachstellen erfasst und bewertet, einschließlich Integration von Bedrohungsinformationen und Sicherheitsstandards.", "value": 3 }
                    ]
                },
                {
                    "id": "q1_4_2",
                    "text": "Welche Tools und Prozesse zur Schwachstellenbewertung und -behebung sind im Einsatz?",
                    "answers": [
                        { "text": "Es werden keine speziellen Tools oder Prozesse zur Schwachstellenbewertung eingesetzt.", "value": 1 },
                        { "text": "Es sind spezifische Tools (z. B. Nessus, Qualys, etc.) im Einsatz, und es gibt dokumentierte Prozesse zur Identifizierung und Behebung von Schwachstellen.", "value": 2 },
                        { "text": "Ein integriertes Schwachstellenmanagementsystem wird verwendet, das mehrere Tools umfasst, einschließlich automatisierter Behebungsstrategien und fortlaufendem Monitoring zur Validierung der Behebungsmaßnahmen.", "value": 3 }
                    ]
                },
                {
                    "id": "q1_4_3",
                    "text": "Wie erfolgt das Priorisieren von Schwachstellen?",
                    "answers": [
                        { "text": "Schwachstellen werden ad-hoc und ohne klare Priorisierung behandelt.", "value": 1 },
                        { "text": "Es gibt definierte Kriterien zur Priorisierung von Schwachstellen, basierend auf Schweregrad und Exploitation-Potential (z.B. CVSS-Score).", "value": 2 },
                        { "text": "Die Priorisierung erfolgt anhand eines umfassenden, datengestützten Modells, das nicht nur den Schweregrad, sondern auch das potenzielle Risiko für das Unternehmen, den geschäftlichen Kontext und Bedrohungsdaten aus Threat Intelligence berücksichtigt.", "value": 3 }
                    ]
                }
            ]
        },
        {
            "id": 5,
            "title": "1.5 Physischer Schutz",
            "questions": [
                {
                    "id": "q1_5_1",
                    "text": "Welche Schutzmaßnahmen sind für Ihre physischen IT-Ressourcen implementiert?",
                    "answers": [
                        { "text": "Es existieren keine spezifischen physischen Schutzmaßnahmen oder diese sind sehr rudimentär (z.B. einfache Schlösser).", "value": 1 },
                        { "text": "Es sind grundlegende Schutzmaßnahmen implementiert, wie Sicherheitsschlösser, Zugangskontrollen und möglicherweise eine Videoüberwachung.", "value": 2 },
                        { "text": "Umfassende physische Sicherheitsmaßnahmen sind in Kraft, einschließlich biometrischer Zugangskontrollen, kontinuierlicher Videoüberwachung und regelmäßiger Sicherheitsüberprüfungen.", "value": 3 }
                    ]
                },
                {
                    "id": "q1_5_2",
                    "text": "Wie wird der Zugriff auf kritische physische Komponenten überwacht?",
                    "answers": [
                        { "text": "Es gibt keine spezifischen Überwachungsmaßnahmen für den Zugriff auf kritische physische Komponenten.", "value": 1 },
                        { "text": "Der Zugriff wird durch einfache Kontrollen überwacht, eventuell durch eine manuelle Protokollierung von Zugängen.", "value": 2 },
                        { "text": "Hochgradig kontrollierte Zugriffsmechanismen sind implementiert, einschließlich segmentierter Aufbewahrung und umfassender Protokollierung aller Zugriffe, kombiniert mit Alarmsystemen bei unbefugtem Zutritt.", "value": 3 }
                    ]
                },
                {
                    "id": "q1_5_3",
                    "text": "Werden Mitarbeiter angewiesen, Papiere und Medien zu entfernen, wenn sie nicht anwesend sind, und ihre Bildschirme zu sperren? (Clean Desk Policy?)",
                    "answers": [
                        { "text": "Es gibt keine klare Richtlinie zur Clean Desk Policy.", "value": 1 },
                        { "text": "Es existiert eine informelle Clean Desk Policy, die teilweise befolgt wird.", "value": 2 },
                        { "text": "Eine strikte Clean Desk Policy ist etabliert und wird regelmäßig durch Schulungen und Audits durchgesetzt, um sicherzustellen, dass Mitarbeiter ihre Arbeitsplätze ordnungsgemäß hinterlassen.", "value": 3 }
                    ]
                },
                {
                    "id": "q1_5_4",
                    "text": "Wie gehen Sie mit IoT-Geräten um?",
                    "answers": [
                        { "text": "Es gibt keine spezifische Strategie für den Umgang mit IoT-Geräten.", "value": 1 },
                        { "text": "Es sind einige Richtlinien vorhanden, aber die Überwachung und Sicherung dieser Geräte ist begrenzt.", "value": 2 },
                        { "text": "Es gibt eine umfassende Strategie für IoT-Geräte, einschließlich Netzwerksegmentierung, regelmäßiger Sicherheitsüberprüfungen und Integration in die Sicherheitsrichtlinien der Organisation.", "value": 3 }
                    ]
                },
                {
                    "id": "q1_5_5",
                    "text": "Sind nicht gemeldete Geräte im Netzwerk erlaubt? Wenn ja, wie werden diese verwaltet, isoliert und gesichert?",
                    "answers": [
                        { "text": "Nicht gemeldete Geräte sind ohne spezifische Richtlinien im Netzwerk erlaubt.", "value": 1 },
                        { "text": "Es gibt Richtlinien für nicht gemeldete Geräte, jedoch ist die Durchsetzung und Überwachung unzureichend.", "value": 2 },
                        { "text": "Strenge Richtlinien sind implementiert, die nicht gemeldete Geräte isolieren, überwachen und sichern, möglicherweise durch ein 'Bring Your Own Device'-Programm mit klaren Sicherheitsanforderungen und Zugangskontrollen.", "value": 3 }
                    ]
                },
                {
                    "id": "q1_5_6",
                    "text": "Wie wird der Zugriff auf kritische physische Komponenten überwacht?",
                    "answers": [
                        { "text": "Es gibt keine spezifischen Überwachungsmaßnahmen für den Zugriff auf kritische physische Komponenten.", "value": 1 },
                        { "text": "Der Zugriff wird durch einfache Kontrollen überwacht, eventuell durch eine manuelle Protokollierung von Zugängen.", "value": 2 },
                        { "text": "Hochgradig kontrollierte Zugriffsmechanismen sind implementiert, einschließlich segmentierter Aufbewahrung und umfassender Protokollierung aller Zugriffe, kombiniert mit Alarmsystemen bei unbefugtem Zutritt.", "value": 3 }
                    ]
                }
            ]
        },
        {
            "id": 6,
            "title": "1.6 Incident Management",
            "questions": [
                {
                    "id": "q1_6_1",
                    "text": "Gibt es etablierte und dokumentierte Prozesse zum Incident-Management?",
                    "answers": [
                        { "text": "Es existieren keine spezifischen Prozesse zum Incident-Management, oder diese sind sehr rudimentär und nicht dokumentiert.", "value": 1 },
                        { "text": "Dokumentierte Prozesse sind vorhanden, werden jedoch unregelmäßig angewendet und möglicherweise nicht von allen Mitarbeitern befolgt.", "value": 2 },
                        { "text": "Vollständig dokumentierte, formalisierte und routinemäßig angewendete Prozesse sind implementiert. Diese Prozesse werden regelmäßig überprüft und verbessert.", "value": 3 }
                    ]
                },
                {
                    "id": "q1_6_2",
                    "text": "Sind Verfahren und Verantwortlichkeiten für das Management von Vorfällen klar definiert?",
                    "answers": [
                        { "text": "Unklare oder nicht definierte Verantwortlichkeiten für das Incident-Management; keine formalen Rollen.", "value": 1 },
                        { "text": "Verantwortlichkeiten sind teilweise definiert, jedoch nicht für alle Rollen klar zugeordnet.", "value": 2 },
                        { "text": "Klare, formal definierte Verfahren und Verantwortlichkeiten existieren, die regelmäßig überprüft und angepasst werden.", "value": 3 }
                    ]
                },
                {
                    "id": "q1_6_3",
                    "text": "Werden alle Sicherheitsvorfälle bewertet und klassifiziert?",
                    "answers": [
                        { "text": "Sicherheitsvorfälle werden sporadisch bewertet, ohne systematische Klassifizierung.", "value": 1 },
                        { "text": "Alle Sicherheitsvorfälle werden regelmäßig bewertet, aber die Klassifizierung ist noch nicht vollständig standardisiert.", "value": 2 },
                        { "text": "Alle Vorfälle werden systematisch bewertet und klassifiziert, wobei standardisierte Verfahren und Metriken zur Anwendung kommen.", "value": 3 }
                    ]
                },
                {
                    "id": "q1_6_4",
                    "text": "Wie werden Erkenntnisse aus Vorfällen in die Praxis umgesetzt?",
                    "answers": [
                        { "text": "Erkenntnisse aus Vorfällen werden selten dokumentiert oder in die Praxis umgesetzt.", "value": 1 },
                        { "text": "Gelegentliche Anpassungen an Sicherheitsrichtlinien und Schulungen basierend auf Vorfall-Erkenntnissen.", "value": 2 },
                        { "text": "Erkenntnisse werden systematisch dokumentiert, in die Praxis umgesetzt und führen zu regelmäßigen Anpassungen der Sicherheitsrichtlinien und Schulungen.", "value": 3 }
                    ]
                }
            ]
        },
        {
            "id": 7,
            "title": "1.7 Risikomanagement",
            "questions": [
                {
                    "id": "q1_7_1",
                    "text": "Haben Sie ein formales Risikomanagement-System?",
                    "answers": [
                        { "text": "Es gibt kein formales Risikomanagement-System oder es ist sehr rudimentär ohne definierte Prozesse.", "value": 1 },
                        { "text": "Ein grundlegendes Risikomanagement-System ist vorhanden, jedoch ohne umfassende Dokumentation oder regelmäßige Anwendung.", "value": 2 },
                        { "text": "Ein etabliertes, formales Risikomanagement-System existiert mit klaren Prozessen zur Identifikation, Bewertung und Behandlung von Risiken.", "value": 3 }
                    ]
                },
                {
                    "id": "q1_7_2",
                    "text": "Wer ist verantwortlich für das Risikomanagement im Unternehmen?",
                    "answers": [
                        { "text": "Keine klar definierte Verantwortlichkeit für das Risikomanagement.", "value": 1 },
                        { "text": "Eine oder mehrere Personen sind benannt, jedoch ohne umfassende Verantwortung oder Befugnis.", "value": 2 },
                        { "text": "Klare Verantwortlichkeiten sind definiert, und das Risikomanagement wird aktiv von einer Person oder einem Team geleitet.", "value": 3 }
                    ]
                },
                {
                    "id": "q1_7_3",
                    "text": "Wie identifizieren und bewerten Sie Sicherheitsrisiken? (z.B. Risikobewertungen, Bedrohungsmodelle)",
                    "answers": [
                        { "text": "Sicherheitsrisiken werden selten oder nicht systematisch identifiziert oder bewertet.", "value": 1 },
                        { "text": "Sicherheitsrisiken werden in unregelmäßigen Abständen identifiziert und bewertet, jedoch fehlen formalisierte Methoden.", "value": 2 },
                        { "text": "Es werden standardisierte Verfahren wie regelmäßige Risikobewertungen und Bedrohungsmodelle eingesetzt, um Sicherheitsrisiken systematisch zu identifizieren und zu bewerten.", "value": 3 }
                    ]
                },
                {
                    "id": "q1_7_4",
                    "text": "Wie oft wird das Risikomanagement überprüft und aktualisiert?",
                    "answers": [
                        { "text": "Überprüfungen des Risikomanagements finden selten oder gar nicht statt.", "value": 1 },
                        { "text": "Überprüfungen erfolgen jährlich oder in unregelmäßigen Abständen, ohne festgelegte Fristen.", "value": 2 },
                        { "text": "Das Risikomanagement wird regelmäßig (z.B. vierteljährlich oder halbjährlich) überprüft und aktualisiert, basierend auf neuen Erkenntnissen oder Änderungen in der Bedrohungslandschaft.", "value": 3 }
                    ]
                },
                {
                    "id": "q1_7_5",
                    "text": "Wie werden Risiken dokumentiert und überwacht?",
                    "answers": [
                        { "text": "Risiken werden sporadisch dokumentiert, ohne einheitliches Verfahren zur Überwachung.", "value": 1 },
                        { "text": "Risiken werden dokumentiert, jedoch fehlt eine systematische Überwachung oder Nachverfolgung.", "value": 2 },
                        { "text": "Risiken werden umfassend dokumentiert und kontinuierlich überwacht, mit einem klaren Verfahren zur Nachverfolgung von Maßnahmen und Änderungen.", "value": 3 }
                    ]
                }
            ]
        },
        {
            "id": 8,
            "title": "1.8 Dokumentation und Reporting",
            "questions": [
                {
                    "id": "q1_8_1",
                    "text": "Wie erfolgt die Dokumentation von Sicherheitsvorkehrungen und -vorfällen?",
                    "answers": [
                        { "text": "Sicherheitsvorkehrungen und Vorfälle werden unregelmäßig und oft informell dokumentiert.", "value": 1 },
                        { "text": "Eine grundlegende Dokumentation erfolgt, jedoch ohne einheitliche Standards oder Verfahren.", "value": 2 },
                        { "text": "Es gibt umfassende und standardisierte Verfahren zur Dokumentation aller Sicherheitsvorkehrungen und Vorfälle, die regelmäßig aktualisiert werden.", "value": 3 }
                    ]
                },
                {
                    "id": "q1_8_2",
                    "text": "Wie werden Sicherheitsrichtlinien und -prozesse dokumentiert und aktualisiert?",
                    "answers": [
                        { "text": "Sicherheitsrichtlinien sind entweder nicht dokumentiert oder sehr rudimentär.", "value": 1 },
                        { "text": "Es gibt dokumentierte Sicherheitsrichtlinien, die jedoch unregelmäßig aktualisiert werden.", "value": 2 },
                        { "text": "Sicherheitsrichtlinien und -prozesse werden regelmäßig überprüft und aktualisiert, und es gibt klare Verfahren für die Dokumentation.", "value": 3 }
                    ]
                },
                {
                    "id": "q1_8_3",
                    "text": "Gibt es regelmäßige Audits oder Überprüfungen der Dokumentationen?",
                    "answers": [
                        { "text": "Es finden keine regelmäßigen Audits oder Überprüfungen statt.", "value": 1 },
                        { "text": "Audits oder Überprüfungen finden unregelmäßig statt, ohne klaren Zeitplan.", "value": 2 },
                        { "text": "Es gibt einen festgelegten Audit-Zyklus, der regelmäßige und systematische Überprüfungen der Dokumentationen umfasst.", "value": 3 }
                    ]
                },
                {
                    "id": "q1_8_4",
                    "text": "Welche Berichtswege und Formate existieren für Sicherheitsvorfälle und deren Analyse?",
                    "answers": [
                        { "text": "Es gibt keine standardisierten Berichtswege oder Formate für Sicherheitsvorfälle.", "value": 1 },
                        { "text": "Berichte über Sicherheitsvorfälle werden erstellt, jedoch ohne einheitliches Format oder Prozess.", "value": 2 },
                        { "text": "Es gibt klar definierte Berichtswege und standardisierte Formate für die Dokumentation und Analyse von Sicherheitsvorfällen, die regelmäßig verwendet werden.", "value": 3 }
                    ]
                }
            ]
        },
        {
            "id": 9,
            "title": "1.9 Notfall- und Krisenmanagement",
            "questions": [
                {
                    "id": "q1_9_1",
                    "text": "Gibt es einen etablierten, dokumentierten und umfassenden Notfallplan? (z.B. Business Continuity Plan, Krisenkommunikationsplan)",
                    "answers": [
                        { "text": "Es existiert kein Notfallplan oder dieser ist sehr rudimentär und nicht dokumentiert.", "value": 1 },
                        { "text": "Ein grundlegender Notfallplan ist vorhanden, jedoch unvollständig und ohne regelmäßige Updates.", "value": 2 },
                        { "text": "Ein umfassender, dokumentierter Notfallplan ist etabliert, einschließlich klarer Zielvorgaben und Verfahren zur Zielverwirklichung.", "value": 3 }
                    ]
                },
                {
                    "id": "q1_9_2",
                    "text": "Sind die Zielvorgaben messbar?",
                    "answers": [
                        { "text": "Es gibt keine messbaren Zielvorgaben im Notfallplan.", "value": 1 },
                        { "text": "Einige Zielvorgaben sind festgelegt, jedoch nicht systematisch messbar.", "value": 2 },
                        { "text": "Alle Zielvorgaben sind klar definiert und messbar, um den Erfolg des Notfallplans zu bewerten.", "value": 3 }
                    ]
                },
                {
                    "id": "q1_9_3",
                    "text": "Wurde festgelegt, was unternommen werden muss, um diese Zielvorgaben zu erreichen, wer die verantwortlichen Personen sind, was die Fristen sind und welche Ressourcen benötigt werden?",
                    "answers": [
                        { "text": "Es gibt keine klaren Festlegungen bezüglich Maßnahmen, Verantwortlichkeiten oder Ressourcen.", "value": 1 },
                        { "text": "Teilweise Festlegungen sind getroffen, jedoch fehlen klare Verantwortlichkeiten oder Fristen.", "value": 2 },
                        { "text": "Alle Maßnahmen, Verantwortlichkeiten, Fristen und benötigten Ressourcen sind klar dokumentiert und kommuniziert.", "value": 3 }
                    ]
                },
                {
                    "id": "q1_9_4",
                    "text": "Hat die Organisation potenzielle und auch eher unwahrscheinliche Risiken und Gelegenheiten identifiziert?",
                    "answers": [
                        { "text": "Es gibt keine systematische Identifizierung von Risiken oder Gelegenheiten.", "value": 1 },
                        { "text": "Risiken und Gelegenheiten werden sporadisch identifiziert, jedoch ohne umfassende Analyse.", "value": 2 },
                        { "text": "Alle potenziellen und unwahrscheinlichen Risiken und Gelegenheiten sind systematisch identifiziert und dokumentiert.", "value": 3 }
                    ]
                },
                {
                    "id": "q1_9_5",
                    "text": "Hat die Organisation die Tätigkeiten zur Handhabung identifizierter Risiken und Gelegenheiten geplant?",
                    "answers": [
                        { "text": "Es gibt keine spezifischen Pläne zur Handhabung identifizierter Risiken und Gelegenheiten.", "value": 1 },
                        { "text": "Einige Pläne existieren, jedoch fehlen systematische Ansätze oder Dokumentationen.", "value": 2 },
                        { "text": "Es sind klare, dokumentierte Pläne vorhanden, die spezifische Tätigkeiten zur Handhabung identifizierter Risiken und Gelegenheiten festlegen.", "value": 3 }
                    ]
                },
                {
                    "id": "q1_9_6",
                    "text": "Sind die Rollen und Verantwortlichkeiten im Krisenfall klar definiert?",
                    "answers": [
                        { "text": "Rollen und Verantwortlichkeiten im Krisenfall sind unklar oder nicht dokumentiert.", "value": 1 },
                        { "text": "Es gibt einige definierte Rollen, jedoch sind sie nicht umfassend oder klar kommuniziert.", "value": 2 },
                        { "text": "Alle Rollen und Verantwortlichkeiten sind klar dokumentiert und kommuniziert, mit einem festgelegten Eskalationsprozess.", "value": 3 }
                    ]
                },
                {
                    "id": "q1_9_7",
                    "text": "Wie erfolgt die Kommunikation im Krisenfall? (z.B. interne, externe, öffentlichkeitswirksame Kommunikation)",
                    "answers": [
                        { "text": "Es gibt keine klaren Kommunikationswege im Krisenfall.", "value": 1 },
                        { "text": "Grundlegende Kommunikationswege sind vorhanden, jedoch ohne festgelegte Prozesse.", "value": 2 },
                        { "text": "Es sind umfassende Kommunikationspläne vorhanden, die alle internen und externen Kommunikationswege im Krisenfall klar definieren.", "value": 3 }
                    ]
                },
                {
                    "id": "q1_9_8",
                    "text": "Werden Notfallpläne getestet und geprobt?",
                    "answers": [
                        { "text": "Es finden keine Tests oder Proben von Notfallplänen statt.", "value": 1 },
                        { "text": "Tests oder Proben finden sporadisch statt, jedoch ohne systematische Durchführung.", "value": 2 },
                        { "text": "Notfallpläne werden regelmäßig getestet und geprobt, einschließlich Dokumentation und Analyse der Ergebnisse.", "value": 3 }
                    ]
                }
            ]
        },
        {
            "id": 10,
            "title": "2.1 Mitarbeiterschulung",
            "questions": [
                {
                    "id": "q2_1_1",
                    "text": "Gibt es systematische Aus- und Weiterbildung der Mitarbeiter im Bereich IT-Sicherheit?",
                    "answers": [
                        { "text": "Es existieren keine formalen Programme zur Aus- und Weiterbildung im Bereich IT-Sicherheit. Schulungen finden ad hoc und unregelmäßig statt, oft basierend auf individuellen Bedürfnissen.", "value": 1 },
                        { "text": "Es gibt ein grundlegendes Schulungsprogramm, das jedoch nicht alle Mitarbeiter systematisch abdeckt. Die Schulungen sind teils dokumentiert, aber die Beteiligung ist möglicherweise unzureichend.", "value": 2 },
                        { "text": "Ein umfassendes und systematisches Schulungsprogramm ist etabliert, das alle Mitarbeiter regelmäßig in IT-Sicherheit schult. Der Schulungsinhalt wird kontinuierlich aktualisiert und verbessert, um neue Bedrohungen zu berücksichtigen.", "value": 3 }
                    ]
                },
                {
                    "id": "q2_1_2",
                    "text": "Welche Methoden/Strategien/Technologien sind im Einsatz? (z.B. E-Learning, Präsenzschulungen, Workshops)",
                    "answers": [
                        { "text": "Es werden keine spezifischen Methoden oder Technologien eingesetzt; Schulungen erfolgen sporadisch und oft informell.", "value": 1 },
                        { "text": "Eine Kombination aus Präsenzschulungen und gelegentlichen E-Learning-Modulen wird genutzt. Die Effektivität der Methoden wird jedoch nicht regelmäßig überprüft.", "value": 2 },
                        { "text": "Ein breites Spektrum an Methoden wird verwendet, einschließlich E-Learning, Präsenzschulungen, Workshops und Simulationen. Die Schulungsstrategien werden regelmäßig evaluiert und angepasst, um die besten Ergebnisse zu erzielen.", "value": 3 }
                    ]
                },
                {
                    "id": "q2_1_3",
                    "text": "Wie werden die verschiedenen Gruppen (z.B. IT-Personal, Entwickler, Vertrieb, HR) aus- und weitergebildet? (übergreifend/gezielt)",
                    "answers": [
                        { "text": "Es gibt keine gezielte Ausbildung für verschiedene Gruppen; alle Mitarbeiter erhalten die gleichen Schulungsinhalte, unabhängig von ihrer Rolle.", "value": 1 },
                        { "text": "Schulungen sind teilweise auf bestimmte Gruppen zugeschnitten, jedoch nicht konsistent oder umfassend. Es gibt wenig Differenzierung in den Inhalten basierend auf den spezifischen Bedürfnissen der Abteilungen.", "value": 2 },
                        { "text": "Es sind spezifische Schulungsprogramme für verschiedene Gruppen definiert, die auf deren Bedürfnisse zugeschnitten sind. Alle relevanten Abteilungen erhalten regelmäßig angepasste Schulungen.", "value": 3 }
                    ]
                },
                {
                    "id": "q2_1_4",
                    "text": "Werden Schulungen auf spezifische Bedrohungsszenarien ausgerichtet? (z.B. Phishing, Social Engineering)",
                    "answers": [
                        { "text": "Schulungen decken keine spezifischen Bedrohungsszenarien ab; allgemeine Sicherheitsrichtlinien werden vorgestellt, ohne auf spezielle Risiken einzugehen.", "value": 1 },
                        { "text": "Einige Schulungen konzentrieren sich auf spezifische Bedrohungsszenarien wie Phishing, jedoch nicht regelmäßig oder systematisch.", "value": 2 },
                        { "text": "Schulungen sind regelmäßig auf spezifische Bedrohungsszenarien ausgerichtet, einschließlich Phishing, Social Engineering und anderen aktuellen Bedrohungen. Die Schulungsinhalte werden fortlaufend angepasst, um aktuelle Trends zu berücksichtigen.", "value": 3 }
                    ]
                },
                {
                    "id": "q2_1_5",
                    "text": "Werden externe Schulungen und Zertifizierungen für IT-Sicherheitsmitarbeiter unterstützt?",
                    "answers": [
                        { "text": "Es gibt keine Unterstützung für externe Schulungen oder Zertifizierungen; Mitarbeiter müssen solche Möglichkeiten selbstständig finden.", "value": 1 },
                        { "text": "Einige Unterstützung für externe Schulungen wird geboten, jedoch ist diese nicht systematisch und oft unzureichend.", "value": 2 },
                        { "text": "Es gibt ein strukturiertes Programm zur Unterstützung externer Schulungen und Zertifizierungen, das finanzielle Anreize und Zeit für Weiterbildung bietet. Mitarbeiter werden aktiv ermutigt, relevante Zertifizierungen zu erwerben.", "value": 3 }
                    ]
                },
                {
                    "id": "q2_1_6",
                    "text": "Gibt es Vorgaben oder Anreize für das Erreichen bestimmter Zertifizierungen?",
                    "answers": [
                        { "text": "Es existieren keine spezifischen Vorgaben oder Anreize; Zertifizierungen sind freiwillig und werden nicht gefördert.", "value": 1 },
                        { "text": "Es gibt einige Anreize für das Erreichen von Zertifizierungen, jedoch keine klaren Vorgaben oder Unterstützung für die Vorbereitung.", "value": 2 },
                        { "text": "Klare Vorgaben für relevante Zertifizierungen sind festgelegt, einschließlich finanzieller Anreize und Zeit, um sich auf Prüfungen vorzubereiten. Zertifizierungen werden als Teil der beruflichen Entwicklung betrachtet und aktiv gefördert.", "value": 3 }
                    ]
                },
                {
                    "id": "q2_1_7",
                    "text": "Wie werden die Schulungsbedarfe ermittelt und priorisiert?",
                    "answers": [
                        { "text": "Es gibt keine systematische Ermittlung oder Priorisierung von Schulungsbedarfen; Bedürfnisse werden oft nur ad hoc identifiziert.", "value": 1 },
                        { "text": "Schulungsbedarfe werden gelegentlich ermittelt, jedoch ohne klare Methodik oder regelmäßige Überprüfung.", "value": 2 },
                        { "text": "Ein strukturierter Prozess zur Ermittlung und Priorisierung von Schulungsbedarfen ist etabliert, der regelmäßige Bewertungen, Feedback von Mitarbeitern und aktuelle Bedrohungsanalysen umfasst.", "value": 3 }
                    ]
                },
                {
                    "id": "q2_1_8",
                    "text": "Gibt es eine Schulung zur sicheren Nutzung mobiler Geräte und Heimarbeitsplätze?",
                    "answers": [
                        { "text": "Es gibt keine spezifischen Schulungen zur sicheren Nutzung mobiler Geräte oder für Heimarbeitsplätze.", "value": 1 },
                        { "text": "Einige grundlegende Schulungen zur sicheren Nutzung mobiler Geräte und Heimarbeit werden angeboten, jedoch nicht regelmäßig oder systematisch.", "value": 2 },
                        { "text": "Es sind umfassende Schulungsprogramme zur sicheren Nutzung mobiler Geräte und für Heimarbeitsplätze etabliert, die regelmäßig aktualisiert und an die aktuellen Bedrohungen angepasst werden.", "value": 3 }
                    ]
                },
                {
                    "id": "q2_1_9",
                    "text": "Wie wird die Effektivität der Schulungen gemessen und evaluiert? (z.B. Phishing-Kampagnen, Vorfall-Inszenierung/Simulation)",
                    "answers": [
                        { "text": "Es gibt keine systematische Messung der Effektivität von Schulungen; Feedback wird selten oder gar nicht eingeholt.", "value": 1 },
                        { "text": "Die Effektivität wird sporadisch durch informelles Feedback oder gelegentliche Tests (z. B. einfache Umfragen) gemessen, jedoch ohne systematische Analyse.", "value": 2 },
                        { "text": "Die Effektivität der Schulungen wird regelmäßig durch strukturierte Evaluierungen, Simulationen (z. B. Phishing-Tests) und die Analyse von Vorfällen gemessen. Ergebnisse fließen direkt in die kontinuierliche Verbesserung der Schulungsprogramme ein.", "value": 3 }
                    ]
                },
                {
                    "id": "q2_1_10",
                    "text": "Wie wird sichergestellt, dass neue Mitarbeiter die notwendigen Schulungen erhalten?",
                    "answers": [
                        { "text": "Es gibt keinen spezifischen Prozess zur Schulung neuer Mitarbeiter; Schulungen sind unregelmäßig und nicht dokumentiert.", "value": 1 },
                        { "text": "Ein grundlegender Prozess ist vorhanden, jedoch werden Schulungen für neue Mitarbeiter möglicherweise nicht immer rechtzeitig oder umfassend durchgeführt.", "value": 2 },
                        { "text": "Ein strukturierter Onboarding-Prozess sorgt dafür, dass neue Mitarbeiter umgehend alle notwendigen Schulungen zur IT-Sicherheit erhalten. Der Prozess wird regelmäßig überprüft und angepasst, um sicherzustellen, dass alle relevanten Themen abgedeckt werden.", "value": 3 }
                    ]
                }
            ]
        },
        {
            "id": 11,
            "title": "2.2 Sicherheitskultur",
            "questions": [
                {
                    "id": "q2_2_1",
                    "text": "Wie fördern Sie eine Sicherheitskultur im Unternehmen? (z.B. durch Kampagnen, Workshops, regelmäßige Updates)",
                    "answers": [
                        { "text": "Es gibt keine spezifischen Initiativen zur Förderung einer Sicherheitskultur. Sicherheitsfragen werden selten thematisiert, und es gibt keine regelmäßigen Updates oder Schulungen.", "value": 1 },
                        { "text": "Gelegentliche Kampagnen oder Workshops zur Sensibilisierung für IT-Sicherheit finden statt, jedoch nicht regelmäßig oder systematisch. Es gibt einige Anstrengungen, Sicherheitsfragen zu kommunizieren, diese sind jedoch sporadisch.", "value": 2 },
                        { "text": "Eine umfassende Sicherheitskultur wird aktiv gefördert durch regelmäßige Kampagnen, Workshops und Updates. Sicherheitsbelange sind integraler Bestandteil der Unternehmenskommunikation und -kultur, und es wird kontinuierlich daran gearbeitet, das Sicherheitsbewusstsein zu stärken.", "value": 3 }
                    ]
                },
                {
                    "id": "q2_2_2",
                    "text": "Gibt es im Unternehmen 'Security Champions'? Wenn ja, wie werden diese gewählt und wo werden diese eingesetzt?",
                    "answers": [
                        { "text": "Es existieren keine 'Security Champions' im Unternehmen. Sicherheitsverantwortung liegt ausschließlich bei der IT-Abteilung.", "value": 1 },
                        { "text": "Einige Mitarbeiter sind als 'Security Champions' benannt, jedoch ist der Auswahlprozess unklar, und ihre Rolle ist oft nicht gut definiert. Sie könnten informell in ihren Abteilungen arbeiten, ohne umfassende Schulungen oder Ressourcen.", "value": 2 },
                        { "text": "Ein formelles Programm zur Ernennung von 'Security Champions' ist etabliert. Diese werden sorgfältig ausgewählt und erhalten regelmäßige Schulungen, um Sicherheitsaspekte in ihren Teams aktiv zu fördern. Sie spielen eine Schlüsselrolle bei der Kommunikation von Sicherheitsrichtlinien und der Umsetzung von Best Practices.", "value": 3 }
                    ]
                },
                {
                    "id": "q2_2_3",
                    "text": "Wie wird das Bewusstsein für IT-Sicherheit in der Führungsebene gefördert? (z.B. spezielle Workshops, Executive Summaries)",
                    "answers": [
                        { "text": "Es gibt keine spezifischen Initiativen zur Förderung des Sicherheitsbewusstseins in der Führungsebene. Sicherheitsaspekte werden selten oder gar nicht angesprochen.", "value": 1 },
                        { "text": "Einige Workshops oder Präsentationen zu IT-Sicherheit werden für die Führungsebene angeboten, jedoch ist dies nicht regelmäßig oder systematisch. Feedback und Engagement der Führungskräfte sind begrenzt.", "value": 2 },
                        { "text": "Es werden regelmäßige, maßgeschneiderte Workshops und Executive Summaries angeboten, um das Sicherheitsbewusstsein in der Führungsebene zu stärken. Führungskräfte sind aktiv in die Sicherheitskultur eingebunden und fördern diese auch im gesamten Unternehmen.", "value": 3 }
                    ]
                },
                {
                    "id": "q2_2_4",
                    "text": "Wie wird das Sicherheitsbewusstsein in neue Mitarbeiter integriert? (z.B. Onboarding-Programme, Mentoring)",
                    "answers": [
                        { "text": "Es gibt keinen spezifischen Prozess zur Integration des Sicherheitsbewusstseins in das Onboarding neuer Mitarbeiter. Sicherheitsfragen werden nicht thematisiert.", "value": 1 },
                        { "text": "Einige grundlegende Inhalte zur IT-Sicherheit werden im Onboarding-Prozess vermittelt, jedoch nicht umfassend oder systematisch.", "value": 2 },
                        { "text": "Ein strukturiertes Onboarding-Programm enthält umfassende Schulungen zum Sicherheitsbewusstsein. Neue Mitarbeiter werden aktiv in Sicherheitspraktiken integriert und erhalten gegebenenfalls Mentoring von erfahrenen Mitarbeitern oder Security Champions.", "value": 3 }
                    ]
                },
                {
                    "id": "q2_2_5",
                    "text": "Wie wird der Austausch zwischen den Abteilungen gefördert, um Sicherheitsaspekte ganzheitlich zu betrachten?",
                    "answers": [
                        { "text": "Es gibt keine formalen Mechanismen zum Austausch zwischen Abteilungen in Bezug auf Sicherheitsaspekte. Die Kommunikation erfolgt informell und sporadisch.", "value": 1 },
                        { "text": "Es finden gelegentliche interdisziplinäre Meetings oder Workshops statt, jedoch ohne feste Strukturen oder regelmäßige Teilnahme. Der Austausch ist nicht umfassend oder systematisch.", "value": 2 },
                        { "text": "Ein aktiver und strukturierter Austausch zwischen Abteilungen wird gefördert, beispielsweise durch regelmäßige interdisziplinäre Workshops, Sicherheitskomitees oder gemeinsame Projekte. Alle Abteilungen arbeiten zusammen, um Sicherheitsaspekte ganzheitlich zu betrachten.", "value": 3 }
                    ]
                },
                {
                    "id": "q2_2_6",
                    "text": "Wie wird der Erfolg von Sicherheitskampagnen gemessen? (z.B. durch Umfragen, Reduzierung von Vorfällen)",
                    "answers": [
                        { "text": "Der Erfolg von Sicherheitskampagnen wird nicht gemessen oder evaluiert. Es gibt keine systematischen Feedback-Mechanismen.", "value": 1 },
                        { "text": "Gelegentliche Umfragen oder informelle Feedbacks werden eingeholt, jedoch ohne klare Methodik oder regelmäßige Analyse der Ergebnisse.", "value": 2 },
                        { "text": "Der Erfolg von Sicherheitskampagnen wird regelmäßig und systematisch gemessen, zum Beispiel durch Umfragen, Analysen von Vorfallzahlen oder andere KPIs. Die Ergebnisse werden genutzt, um zukünftige Kampagnen zu optimieren und anzupassen.", "value": 3 }
                    ]
                },
                {
                    "id": "q2_2_7",
                    "text": "Gibt es Belohnungssysteme für sicherheitsbewusstes Verhalten?",
                    "answers": [
                        { "text": "Es existieren keine Belohnungssysteme für sicherheitsbewusstes Verhalten; Sicherheitsbewusstsein ist nicht formell incentiviert.", "value": 1 },
                        { "text": "Einige informelle Belohnungen oder Anerkennungen für sicherheitsbewusstes Verhalten können vorhanden sein, jedoch nicht systematisch oder regelmäßig.", "value": 2 },
                        { "text": "Ein strukturiertes Belohnungssystem ist etabliert, das Mitarbeiter für sicherheitsbewusstes Verhalten anerkennt und belohnt. Dieses System fördert aktiv das Engagement und die Beteiligung der Mitarbeiter an der Sicherheitskultur des Unternehmens.", "value": 3 }
                    ]
                }
            ]
        },
        {
            "id": 12,
            "title": "3.1 Compliance",
            "questions": [
                {
                    "id": "q3_1_1",
                    "text": "Welche regulatorischen Anforderungen und Standards müssen Sie erfüllen? (z.B. GDPR/DSGVO, ISO 27001, NIST)",
                    "answers": [
                        { "text": "Es gibt keine klare Identifikation der regulatorischen Anforderungen oder Standards, die erfüllt werden müssen. Das Unternehmen ist sich nicht bewusst, welche Vorgaben relevant sind.", "value": 1 },
                        { "text": "Einige der relevanten regulatorischen Anforderungen sind identifiziert, jedoch besteht Unsicherheit über die vollständige Liste. Es gibt grundlegendes Bewusstsein für Standards wie GDPR oder ISO 27001.", "value": 2 },
                        { "text": "Alle relevanten regulatorischen Anforderungen und Standards sind klar identifiziert und dokumentiert. Das Unternehmen ist proaktiv in der Einhaltung von Standards wie GDPR, ISO 27001 und NIST.", "value": 3 }
                    ]
                },
                {
                    "id": "q3_1_2",
                    "text": "Welche regulatorischen Anforderungen und Standards wollen Sie erfüllen?",
                    "answers": [
                        { "text": "Es gibt keine klare Vision oder Strategie, welche zusätzlichen Anforderungen oder Standards das Unternehmen in Zukunft erfüllen möchte.", "value": 1 },
                        { "text": "Einige Anforderungen sind identifiziert, jedoch fehlen spezifische Ziele oder Strategien zur Erreichung dieser Standards.", "value": 2 },
                        { "text": "Das Unternehmen hat klare strategische Ziele formuliert, um zusätzliche regulatorische Anforderungen oder Standards zu erfüllen und die Compliance kontinuierlich zu verbessern.", "value": 3 }
                    ]
                },
                {
                    "id": "q3_1_3",
                    "text": "Welche regulatorischen Anforderungen und Standards haben Sie bereits erfüllt?",
                    "answers": [
                        { "text": "Es gibt keine Dokumentation oder Nachweise über erfüllte regulatorische Anforderungen.", "value": 1 },
                        { "text": "Einige regulatorische Anforderungen wurden erfüllt, jedoch ist die Dokumentation unvollständig oder nicht aktuell.", "value": 2 },
                        { "text": "Alle erfüllten regulatorischen Anforderungen und Standards sind umfassend dokumentiert, und das Unternehmen kann Nachweise für die Einhaltung vorlegen.", "value": 3 }
                    ]
                },
                {
                    "id": "q3_1_4",
                    "text": "Wie wird die Einhaltung dieser Anforderungen sichergestellt und überwacht?",
                    "answers": [
                        { "text": "Es gibt keine systematischen Prozesse zur Überwachung der Compliance. Die Einhaltung erfolgt sporadisch und ist nicht dokumentiert.", "value": 1 },
                        { "text": "Grundlegende Prozesse zur Überwachung der Einhaltung sind vorhanden, jedoch nicht umfassend oder regelmäßig. Es erfolgt gelegentliche Überprüfung.", "value": 2 },
                        { "text": "Es sind umfassende, systematische Prozesse zur Überwachung und Sicherstellung der Compliance implementiert. Regelmäßige Berichte und Analysen werden erstellt, um die Einhaltung kontinuierlich zu überprüfen.", "value": 3 }
                    ]
                },
                {
                    "id": "q3_1_5",
                    "text": "Gibt es regelmäßige interne und externe Audits zur Überprüfung der Compliance?",
                    "answers": [
                        { "text": "Es finden keine regelmäßigen Audits statt. Überprüfungen erfolgen sporadisch und unstrukturiert.", "value": 1 },
                        { "text": "Es werden gelegentlich interne Audits durchgeführt, externe Audits finden jedoch nicht regelmäßig statt.", "value": 2 },
                        { "text": "Es gibt einen etablierten Audit-Plan, der regelmäßige interne und externe Audits umfasst. Die Ergebnisse der Audits werden analysiert und zur kontinuierlichen Verbesserung der Compliance genutzt.", "value": 3 }
                    ]
                },
                {
                    "id": "q3_1_6",
                    "text": "Wie gehen Sie mit Non-Compliance um? (z.B. Sofortmaßnahmen, langfristige Korrekturmaßnahmen)",
                    "answers": [
                        { "text": "Es gibt keine klaren Verfahren für den Umgang mit Non-Compliance. Maßnahmen werden oft ad hoc und ohne Struktur ergriffen.", "value": 1 },
                        { "text": "Grundlegende Maßnahmen zur Reaktion auf Non-Compliance sind vorhanden, jedoch fehlt ein formalisierter Prozess für die Umsetzung von Korrekturmaßnahmen.", "value": 2 },
                        { "text": "Es gibt einen klaren und dokumentierten Prozess für den Umgang mit Non-Compliance, einschließlich Sofortmaßnahmen und langfristigen Korrekturmaßnahmen. Alle Vorfälle werden analysiert und genutzt, um zukünftige Non-Compliance zu vermeiden.", "value": 3 }
                    ]
                }
            ]
        },
        {
            "id": 13,
            "title": "3.2 Datenschutz",
            "questions": [
                {
                    "id": "q3_2_1",
                    "text": "Wie stellen Sie den Schutz personenbezogener Daten sicher?",
                    "answers": [
                        { "text": "Es gibt keine spezifischen Maßnahmen zum Schutz personenbezogener Daten. Datenschutz ist nicht formalisiert.", "value": 1 },
                        { "text": "Grundlegende Schutzmaßnahmen sind implementiert, jedoch ohne umfassende Dokumentation oder regelmäßige Überprüfung.", "value": 2 },
                        { "text": "Umfassende Maßnahmen zum Schutz personenbezogener Daten sind etabliert, einschließlich Datenverschlüsselung, Zugriffskontrollen und regelmäßigen Schulungen. Der Datenschutz wird systematisch überwacht und kontinuierlich verbessert.", "value": 3 }
                    ]
                },
                {
                    "id": "q3_2_2",
                    "text": "Welche Maßnahmen haben Sie implementiert, um Datenschutzverletzungen zu erkennen und zu melden?",
                    "answers": [
                        { "text": "Es gibt keine spezifischen Maßnahmen zur Erkennung oder Meldung von Datenschutzverletzungen.", "value": 1 },
                        { "text": "Einige grundlegende Verfahren zur Erkennung von Datenschutzverletzungen sind vorhanden, jedoch nicht umfassend oder regelmäßig getestet.", "value": 2 },
                        { "text": "Umfassende Verfahren zur Erkennung und Meldung von Datenschutzverletzungen sind implementiert und regelmäßig getestet. Es gibt klare Kommunikationswege und Schulungen für Mitarbeiter, um Datenschutzverletzungen zu melden.", "value": 3 }
                    ]
                },
                {
                    "id": "q3_2_3",
                    "text": "Gibt es einen Datenschutzbeauftragten im Unternehmen?",
                    "answers": [
                        { "text": "Es gibt keinen Datenschutzbeauftragten oder die Rolle ist nicht formalisiert.", "value": 1 },
                        { "text": "Ein Datenschutzbeauftragter ist benannt, jedoch fehlen klare Verantwortlichkeiten oder ausreichende Ressourcen.", "value": 2 },
                        { "text": "Ein qualifizierter Datenschutzbeauftragter ist etabliert, der über ausreichende Ressourcen und Autorität verfügt, um Datenschutzanforderungen zu überwachen und durchzusetzen.", "value": 3 }
                    ]
                },
                {
                    "id": "q3_2_4",
                    "text": "Wie werden Datenaufbewahrung und Datenvernichtung geregelt?",
                    "answers": [
                        { "text": "Es gibt keine spezifischen Richtlinien zur Datenaufbewahrung oder -vernichtung. Daten werden ad hoc verwaltet.", "value": 1 },
                        { "text": "Grundlegende Richtlinien zur Datenaufbewahrung sind vorhanden, jedoch fehlen klare Verfahren zur Datenvernichtung.", "value": 2 },
                        { "text": "Umfassende und dokumentierte Richtlinien zur Datenaufbewahrung und -vernichtung sind etabliert. Es gibt regelmäßige Überprüfungen, um sicherzustellen, dass Daten entsprechend den Richtlinien behandelt werden.", "value": 3 }
                    ]
                }
            ]
        },
        {
            "id": 14,
            "title": "3.3 Richtlinien und Verfahren",
            "questions": [
                {
                    "id": "q3_3_1",
                    "text": "Gibt es schriftliche Sicherheitsrichtlinien? (z.B. IT-Sicherheitsrichtlinien, Datenschutzrichtlinien)",
                    "answers": [
                        { "text": "Es existieren keine schriftlichen Sicherheitsrichtlinien oder diese sind unvollständig.", "value": 1 },
                        { "text": "Einige schriftliche Sicherheitsrichtlinien sind vorhanden, jedoch nicht umfassend oder regelmäßig aktualisiert.", "value": 2 },
                        { "text": "Umfassende, dokumentierte Sicherheitsrichtlinien sind etabliert und werden regelmäßig überprüft und aktualisiert.", "value": 3 }
                    ]
                },
                {
                    "id": "q3_3_2",
                    "text": "Wie häufig werden Richtlinien überprüft und aktualisiert?",
                    "answers": [
                        { "text": "Es gibt keine regelmäßigen Überprüfungen der Richtlinien.", "value": 1 },
                        { "text": "Richtlinien werden gelegentlich überprüft, jedoch ohne festgelegte Intervalle oder systematische Vorgehensweise.", "value": 2 },
                        { "text": "Richtlinien werden regelmäßig und systematisch überprüft und aktualisiert, um sicherzustellen, dass sie aktuellen Anforderungen und Best Practices entsprechen.", "value": 3 }
                    ]
                },
                {
                    "id": "q3_3_3",
                    "text": "Wie werden Mitarbeiter auf neue oder geänderte Richtlinien aufmerksam gemacht?",
                    "answers": [
                        { "text": "Es gibt keine formalen Verfahren, um Mitarbeiter über neue oder geänderte Richtlinien zu informieren.", "value": 1 },
                        { "text": "Einige Mitarbeiter werden über Änderungen informiert, jedoch erfolgt dies nicht systematisch oder umfassend.", "value": 2 },
                        { "text": "Ein strukturierter Kommunikationsprozess ist etabliert, um sicherzustellen, dass alle Mitarbeiter über neue oder geänderte Richtlinien informiert werden. Dies umfasst Schulungen, Newsletter und regelmäßige Updates.", "value": 3 }
                    ]
                },
                {
                    "id": "q3_3_4",
                    "text": "Gibt es ein Verfahren für die Eskalation von Sicherheitsbedenken?",
                    "answers": [
                        { "text": "Es existiert kein formelles Verfahren zur Eskalation von Sicherheitsbedenken.", "value": 1 },
                        { "text": "Ein grundlegendes Verfahren zur Eskalation von Sicherheitsbedenken ist vorhanden, jedoch nicht klar dokumentiert oder häufig genutzt.", "value": 2 },
                        { "text": "Ein klar definiertes und dokumentiertes Verfahren für die Eskalation von Sicherheitsbedenken ist etabliert. Mitarbeiter sind geschult, und es gibt klare Kommunikationswege zur Meldung von Sicherheitsproblemen.", "value": 3 }
                    ]
                }
            ]
        },
        {
            "id": 15,
            "title": "4.1 Drittanbieter-Management",
            "questions": [
                {
                    "id": "q4_1_1",
                    "text": "Wie wählen Sie Drittanbieter aus und überprüfen deren Sicherheitspraktiken?",
                    "answers": [
                        { "text": "Es gibt keine systematische Auswahl oder Überprüfung von Drittanbietern. Die Auswahl basiert häufig auf Preis oder Verfügbarkeit ohne Berücksichtigung von Sicherheitspraktiken.", "value": 1 },
                        { "text": "Ein grundlegender Auswahlprozess ist vorhanden, der einige Sicherheitskriterien umfasst, jedoch keine umfassende Prüfung der Sicherheitspraktiken der Drittanbieter beinhaltet.", "value": 2 },
                        { "text": "Ein strukturierter und dokumentierter Auswahlprozess ist etabliert, der umfassende Sicherheitsüberprüfungen umfasst. Dies schließt die Analyse von Sicherheitsrichtlinien, Zertifizierungen und Auditberichten der Drittanbieter ein.", "value": 3 }
                    ]
                },
                {
                    "id": "q4_1_2",
                    "text": "Wie wird der Zugriff von Drittanbietern auf Ihre Systeme und Daten kontrolliert?",
                    "answers": [
                        { "text": "Es gibt keine klaren Kontrollen für den Zugriff von Drittanbietern. Der Zugriff erfolgt oft unreguliert und ohne klare Richtlinien.", "value": 1 },
                        { "text": "Einige Kontrollen sind implementiert, jedoch sind diese möglicherweise unzureichend oder nicht dokumentiert. Der Zugriff wird teilweise protokolliert, aber nicht regelmäßig überprüft.", "value": 2 },
                        { "text": "Strenge Zugangskontrollen sind implementiert, einschließlich Rollen-basierter Zugriff und kontinuierlicher Überwachung. Zugriffe werden umfassend protokolliert, und es gibt regelmäßige Überprüfungen der Zugriffskontrollen.", "value": 3 }
                    ]
                },
                {
                    "id": "q4_1_3",
                    "text": "Gibt es Vereinbarungen zur Informationssicherheit mit Drittanbietern? (z.B. SLA, DPA)",
                    "answers": [
                        { "text": "Es existieren keine formalen Vereinbarungen zur Informationssicherheit mit Drittanbietern.", "value": 1 },
                        { "text": "Einige grundlegende Vereinbarungen sind vorhanden, jedoch nicht umfassend oder spezifisch genug, um alle Sicherheitsaspekte abzudecken.", "value": 2 },
                        { "text": "Umfassende und klare Vereinbarungen zur Informationssicherheit sind etabliert, einschließlich Service Level Agreements (SLA) und Datenschutzvereinbarungen (DPA), die spezifische Sicherheitsanforderungen und -verpflichtungen der Drittanbieter beinhalten.", "value": 3 }
                    ]
                },
                {
                    "id": "q4_1_4",
                    "text": "Werden Lieferanten auf Sicherheitsstandards (wie z.B. ISO 27001 oder NIST) geprüft?",
                    "answers": [
                        { "text": "Es gibt keine formelle Prüfung der Sicherheitsstandards von Lieferanten.", "value": 1 },
                        { "text": "Einige Lieferanten werden gelegentlich auf grundlegende Sicherheitsstandards geprüft, jedoch nicht systematisch oder umfassend.", "value": 2 },
                        { "text": "Alle Lieferanten werden systematisch auf relevante Sicherheitsstandards geprüft, einschließlich ISO 27001, NIST oder branchenspezifischen Standards. Prüfungen werden dokumentiert und regelmäßig aktualisiert.", "value": 3 }
                    ]
                },
                {
                    "id": "q4_1_5",
                    "text": "Gibt es spezielle Anforderungen an Drittanbieter hinsichtlich der Datensicherheit?",
                    "answers": [
                        { "text": "Es bestehen keine speziellen Anforderungen oder Richtlinien für Drittanbieter in Bezug auf die Datensicherheit.", "value": 1 },
                        { "text": "Grundlegende Anforderungen sind formuliert, jedoch möglicherweise nicht klar oder umfassend genug, um die Datensicherheit zu gewährleisten.", "value": 2 },
                        { "text": "Es gibt klare, umfassende Anforderungen an Drittanbieter bezüglich der Datensicherheit, die vertraglich festgelegt sind und regelmäßig überprüft werden.", "value": 3 }
                    ]
                },
                {
                    "id": "q4_1_6",
                    "text": "Wie häufig werden Sicherheitsbewertungen von Drittanbietern durchgeführt?",
                    "answers": [
                        { "text": "Sicherheitsbewertungen werden nicht oder nur sporadisch durchgeführt.", "value": 1 },
                        { "text": "Sicherheitsbewertungen werden in regelmäßigen Abständen, jedoch möglicherweise nicht konsistent oder umfassend durchgeführt.", "value": 2 },
                        { "text": "Sicherheitsbewertungen werden regelmäßig und systematisch durchgeführt, um die Sicherheitspraktiken der Drittanbieter kontinuierlich zu überprüfen und zu verbessern. Die Ergebnisse fließen in die Entscheidungsfindung ein.", "value": 3 }
                    ]
                },
                {
                    "id": "q4_1_7",
                    "text": "Welche Maßnahmen sind vorgesehen, wenn ein Drittanbieter nicht den Sicherheitsanforderungen entspricht?",
                    "answers": [
                        { "text": "Es gibt keine klaren Maßnahmen oder Prozesse für den Umgang mit Drittanbietern, die nicht den Sicherheitsanforderungen entsprechen.", "value": 1 },
                        { "text": "Es existieren grundlegende Maßnahmen, jedoch fehlt ein formalisiertes Verfahren zur Umsetzung von Korrekturmaßnahmen oder zur Beendigung von Verträgen.", "value": 2 },
                        { "text": "Ein klar definierter Prozess ist implementiert, um auf die Nichteinhaltung von Sicherheitsanforderungen zu reagieren. Dazu gehören Maßnahmen wie die Einleitung von Korrekturmaßnahmen, Überwachung der Umsetzung und gegebenenfalls die Kündigung von Verträgen.", "value": 3 }
                    ]
                },
                {
                    "id": "q4_1_8",
                    "text": "Gibt es eine interne Richtlinie, um sicherzustellen, dass die Sicherheitsanforderungen Ihrer Kunden regelmäßig überprüft und eingehalten werden?",
                    "answers": [
                        { "text": "Es existieren keine internen Richtlinien zur Überprüfung der Sicherheitsanforderungen von Kunden.", "value": 1 },
                        { "text": "Einige interne Richtlinien sind vorhanden, jedoch möglicherweise nicht klar oder umfassend genug.", "value": 2 },
                        { "text": "Umfassende interne Richtlinien sind etabliert, die sicherstellen, dass die Sicherheitsanforderungen der Kunden regelmäßig überprüft und eingehalten werden. Diese Richtlinien werden dokumentiert und regelmäßig aktualisiert.", "value": 3 }
                    ]
                },
                {
                    "id": "q4_1_9",
                    "text": "Welche Prozesse haben Sie implementiert, um Sicherheitsvorfälle oder Datenschutzverletzungen Ihren Kunden unverzüglich zu melden?",
                    "answers": [
                        { "text": "Es gibt keine formellen Prozesse zur Meldung von Sicherheitsvorfällen oder Datenschutzverletzungen an Kunden.", "value": 1 },
                        { "text": "Einige grundlegende Prozesse sind vorhanden, jedoch möglicherweise nicht klar dokumentiert oder regelmäßig getestet.", "value": 2 },
                        { "text": "Ein klar definierter und dokumentierter Prozess ist etabliert, um Sicherheitsvorfälle oder Datenschutzverletzungen unverzüglich an Kunden zu melden. Dieser Prozess wird regelmäßig getestet und aktualisiert.", "value": 3 }
                    ]
                }
            ]
        },
        {
            "id": 16,
            "title": "4.2 Lieferkettenmanagement",
            "questions": [
                {
                    "id": "q4_2_1",
                    "text": "Gibt es eine kontinuierliche Überwachung der Lieferkette auf neue Bedrohungen?",
                    "answers": [
                        { "text": "Es gibt keine systematische Überwachung der Lieferkette. Bedrohungen werden nicht aktiv verfolgt oder dokumentiert", "value": 1 },
                        { "text": "Einige grundlegende Überwachungsmechanismen sind vorhanden, jedoch nicht umfassend oder regelmäßig.", "value": 2 },
                        { "text": "Es gibt ein etabliertes System zur kontinuierlichen Überwachung der Lieferkette auf neue Bedrohungen, das regelmäßig aktualisiert und überprüft wird.", "value": 3 }
                    ]
                },
                {
                    "id": "q4_2_2",
                    "text": "Wie wird die Sicherheit der von Lieferanten bereitgestellten Software oder Hardware geprüft?",
                    "answers": [
                        { "text": "Es gibt keine systematischen Prüfungen der Sicherheit von Software oder Hardware von Lieferanten.", "value": 1 },
                        { "text": "Einige grundlegende Prüfungen sind vorhanden, jedoch möglicherweise nicht umfassend oder regelmäßig dokumentiert.", "value": 2 },
                        { "text": "Umfassende Sicherheitsprüfungen werden regelmäßig durchgeführt, einschließlich Penetrationstests, Code-Reviews und Sicherheitsanalysen, um die Integrität der von Lieferanten bereitgestellten Software und Hardware sicherzustellen.", "value": 3 }
                    ]
                },
                {
                    "id": "q4_2_3",
                    "text": "Gibt es eine Risikoanalyse für die Lieferkette?",
                    "answers": [
                        { "text": "Es gibt keine formelle Risikoanalyse der Lieferkette.", "value": 1 },
                        { "text": "Einige grundlegende Risikoanalysen werden durchgeführt, jedoch nicht umfassend oder regelmäßig aktualisiert.", "value": 2 },
                        { "text": "Eine umfassende Risikoanalyse der Lieferkette ist etabliert, die regelmäßig aktualisiert wird, um potenzielle Risiken zu identifizieren und zu bewerten.", "value": 3 }
                    ]
                },
                {
                    "id": "q4_2_4",
                    "text": "Wie werden potenzielle Risiken in der Lieferkette identifiziert und bewertet?",
                    "answers": [
                        { "text": "Es gibt keine systematischen Verfahren zur Identifizierung oder Bewertung von Risiken in der Lieferkette.", "value": 1 },
                        { "text": "Einige Verfahren sind vorhanden, jedoch nicht umfassend oder regelmäßig.", "value": 2 },
                        { "text": "Umfassende Verfahren zur Identifizierung und Bewertung potenzieller Risiken in der Lieferkette sind etabliert und werden regelmäßig überprüft und angepasst.", "value": 3 }
                    ]
                },
                {
                    "id": "q4_2_5",
                    "text": "Wie wird die Integrität von Produkten und Dienstleistungen in der Lieferkette gewährleistet?",
                    "answers": [
                        { "text": "Es gibt keine spezifischen Maßnahmen zur Gewährleistung der Integrität von Produkten und Dienstleistungen in der Lieferkette.", "value": 1 },
                        { "text": "Einige grundlegende Maßnahmen sind vorhanden, jedoch möglicherweise nicht klar dokumentiert oder regelmäßig überprüft.", "value": 2 },
                        { "text": "Umfassende Maßnahmen zur Gewährleistung der Integrität von Produkten und Dienstleistungen sind etabliert, einschließlich Prüfungen, Zertifizierungen und regelmäßiger Überwachung.", "value": 3 }
                    ]
                },
                {
                    "id": "q4_2_6",
                    "text": "Welche Maßnahmen ergreifen Sie, um sich vor Sicherheitsrisiken in der Lieferkette zu schützen?",
                    "answers": [
                        { "text": "Es gibt keine spezifischen Maßnahmen zum Schutz vor Sicherheitsrisiken in der Lieferkette.", "value": 1 },
                        { "text": "Einige grundlegende Maßnahmen sind vorhanden, jedoch möglicherweise nicht umfassend oder systematisch.", "value": 2 },
                        { "text": "Umfassende Strategien und Maßnahmen sind implementiert, um Sicherheitsrisiken in der Lieferkette zu identifizieren und zu mitigieren. Dazu gehören regelmäßige Schulungen, Sicherheitsbewertungen und Notfallpläne.", "value": 3 }
                    ]
                },
                {
                    "id": "q4_2_7",
                    "text": "Haben Sie eine Strategie zur kontinuierlichen Überwachung und Bewertung Ihrer eigenen Position und Risiken innerhalb der Lieferkette?",
                    "answers": [
                        { "text": "Es gibt keine spezifische Strategie zur Überwachung und Bewertung der eigenen Position innerhalb der Lieferkette.", "value": 1 },
                        { "text": "Eine grundlegende Strategie ist vorhanden, jedoch möglicherweise nicht klar oder umfassend.", "value": 2 },
                        { "text": "Eine umfassende Strategie zur kontinuierlichen Überwachung und Bewertung der eigenen Position und Risiken innerhalb der Lieferkette ist etabliert und wird regelmäßig aktualisiert.", "value": 3 }
                    ]
                },
                {
                    "id": "q4_2_8",
                    "text": "Wie stellen Sie sicher, dass Ihre Lieferanten und Sub-Drittanbieter ebenfalls die von Ihnen geforderten Sicherheitsstandards einhalten?",
                    "answers": [
                        { "text": "Es gibt keine formellen Verfahren zur Sicherstellung der Einhaltung von Sicherheitsstandards durch Lieferanten und Sub-Drittanbieter.", "value": 1 },
                        { "text": "Einige grundlegende Verfahren sind vorhanden, jedoch nicht umfassend oder regelmäßig überprüft.", "value": 2 },
                        { "text": "Umfassende Verfahren sind etabliert, um die Einhaltung von Sicherheitsstandards durch Lieferanten und Sub-Drittanbieter regelmäßig zu überprüfen. Dies umfasst Audits, Zertifizierungen und Sicherheitsbewertungen.", "value": 3 }
                    ]
                },
                {
                    "id": "q4_2_9",
                    "text": "Gibt es eine Prozedur zur Bewertung und Auswahl von Sub-Drittanbietern, die den Sicherheitsanforderungen Ihrer Kunden entspricht?",
                    "answers": [
                        { "text": "Es gibt keine formelle Prozedur zur Bewertung oder Auswahl von Sub-Drittanbietern.", "value": 1 },
                        { "text": "Eine grundlegende Prozedur ist vorhanden, jedoch möglicherweise nicht klar dokumentiert oder umfassend.", "value": 2 },
                        { "text": "Eine klar definierte und dokumentierte Prozedur zur Bewertung und Auswahl von Sub-Drittanbietern ist etabliert, die sicherstellt, dass alle Sicherheitsanforderungen der Kunden erfüllt werden.", "value": 3 }
                    ]
                },
                {
                    "id": "q4_2_10",
                    "text": "Welche Maßnahmen ergreifen Sie, um die Integrität und Sicherheit der von Ihnen bereitgestellten Produkte und Dienstleistungen für Ihre Kunden sicherzustellen?",
                    "answers": [
                        { "text": "Es gibt keine spezifischen Maßnahmen zur Gewährleistung der Integrität und Sicherheit der Produkte und Dienstleistungen.", "value": 1 },
                        { "text": "Einige grundlegende Maßnahmen sind vorhanden, jedoch nicht klar dokumentiert oder regelmäßig überprüft.", "value": 2 },
                        { "text": "Umfassende Maßnahmen zur Gewährleistung der Integrität und Sicherheit der bereitgestellten Produkte und Dienstleistungen sind etabliert, einschließlich Qualitätssicherungsmaßnahmen, Tests und regelmäßiger Überprüfungen.", "value": 3 }
                    ]
                },
                {
                    "id": "q4_2_11",
                    "text": "Wie handhaben Sie die Kommunikation und Zusammenarbeit mit Ihren Kunden bei Sicherheitsfragen oder -vorfällen, die Ihre Rolle als Teil der Lieferkette betreffen?",
                    "answers": [
                        { "text": "Es gibt keine klaren Verfahren für die Kommunikation mit Kunden bei Sicherheitsfragen oder -vorfällen.", "value": 1 },
                        { "text": "Einige grundlegende Verfahren sind vorhanden, jedoch nicht umfassend oder regelmäßig getestet.", "value": 2 },
                        { "text": "Ein klar definierter und dokumentierter Kommunikationsprozess ist etabliert, um mit Kunden bei Sicherheitsfragen oder -vorfällen zusammenzuarbeiten. Es gibt regelmäßige Schulungen und Informationsmaterialien für Kunden, um die Kommunikation zu verbessern.", "value": 3 }
                    ]
                }
            ]
        },
        {
            "id": 17,
            "title": "Abschluss",
            "introduction": "Vielen dank für Ihre Mithilfe! Ihre Antworten helfen uns, eine fundierte Sicherheitsbewertung durchzuführen und Ihr Unternehmen besser zu schützen. Durch diese erweiterten Themenbereiche wird eine noch umfassendere Sicherheitsbewertung ermöglicht, die technische, organisatorische, prozessuale und strategische Aspekte gleichermaßen berücksichtigt. Diese Informationen bieten die Grundlage für eine detaillierte Beratung und gezielte Empfehlungen zur Verbesserung der Sicherheitslage Ihres Unternehmens!",
            "questions": []
        }
    ]
};




// ab hier JavaScript-Code!!!

let currentPage = 0;
let answers = {};

function updateButtonVisibility(pageId) {
    const calculateButton = document.getElementById('calculate-button');
    const finishButton = document.getElementById('finish-button');
    const nextButton = document.getElementById('next-button');
    const prevButton = document.getElementById('prev-button');

    if (pageId === 17) { // Letzte Seite (Abschluss-Seite)
        calculateButton.style.display = 'inline-block'; // Berechnen-Button 
        finishButton.style.display = 'none'; // Abschließen-Button
        nextButton.style.display = 'none'; // Verstecke din Weiter-Button
        prevButton.style.display = 'inline-block'; // Zeige den Zurück-Button an
    } else {
        calculateButton.style.display = 'none'; // berechnen-Button nicht sichtbar
        finishButton.style.display = 'none'; // Abschließen-Button nicht sichtbar
        nextButton.style.display = 'inline-block'; // Weiter-Button 
        prevButton.style.display = 'inline-block'; //Zurück-Button 
    }
}

function loadPage(pageId) {
    const page = data.pages.find(p => p.id === pageId);
    const container = document.getElementById('questions-container');
    container.innerHTML = '';

    if (page) {
        document.getElementById('page-title').textContent = page.title;

        updateButtonVisibility(pageId);

        if (page.questions && page.questions.length > 0) {
            // Lade Fragen für die aktuelle Seite
            page.questions.forEach((question, index) => {
                const questionDiv = document.createElement('div');
                questionDiv.className = 'question-box';
                questionDiv.innerHTML = `<h4>${question.text}</h4>`;
                const answersDiv = document.createElement('div');
                answersDiv.className = 'answers';
                question.answers.forEach((answer, i) => {
                    const answerLabel = document.createElement('label');
                    answerLabel.innerHTML = `
                        <input type="radio" name="${question.id}" value="${answer.value}">
                        ${answer.text}
                    `;
                    answersDiv.appendChild(answerLabel);
                });
                questionDiv.appendChild(answersDiv);
                container.appendChild(questionDiv);
            });
        } else if (page.introduction) {
            // Zeige Einleitung an, wenn keine Fragen vorhanden sind
            container.innerHTML = `<p>${page.introduction}</p>`;
        }
    } else {
        container.innerHTML = `<p>Seite nicht gefunden.</p>`;
    }
}

function showResults() {
    const resultsTable = document.getElementById('results-table').getElementsByTagName('tbody')[0];
    resultsTable.innerHTML = ''; // tabelle zuerst leeren

    let totalScore = 0; // Gesamtscore für alle Kategorien auf Anfang
    let totalQuestions = 0; // Gesamtzahl der beantworteten Fragen auf Anfang

    data.pages.forEach(page => {
        if (page.questions && page.questions.length > 0) {
            const answeredQuestions = page.questions.filter(q => answers[q.id] !== undefined && answers[q.id] !== 0);
            const total = answeredQuestions.reduce((sum, q) => sum + (answers[q.id] || 0), 0);
            const average = answeredQuestions.length > 0 ? total / answeredQuestions.length : 0; // Nur beantwortete Fragen zählen
            const roundedScore = answeredQuestions.length > 0 ? roundScore(average) : 0; // 0 anzeigen, wenn keine Fragen beantwortet wurden

            const row = document.createElement('tr');
            row.innerHTML = `
                <td style="border: 1px solid black; padding: 10px;">${page.title}</td>
                <td style="border: 1px solid black; padding: 10px;">${roundedScore}</td>
            `;
            resultsTable.appendChild(row);

            // Aktualisier Gesamtscore
            totalScore += total;
            totalQuestions += answeredQuestions.length;
        }
    });

    // Berechnung und rundung von reifegrad
    const overallAverage = totalQuestions > 0 ? totalScore / totalQuestions : 0;
    const overallRoundedScore = roundScore(overallAverage);

    // Gesamtreifegrad anzeigen
    document.getElementById('total-score').textContent = overallRoundedScore;
}

function saveAllAnswers() {
    const questions = document.querySelectorAll('.question-box');
    questions.forEach((question) => {
        const questionId = question.querySelector('input[type="radio"]').name;
        const selectedAnswer = question.querySelector('input:checked');
        if (selectedAnswer) {
            answers[questionId] = parseInt(selectedAnswer.value);
        }
    });
    localStorage.setItem('assessmentAnswers', JSON.stringify(answers));
}

function roundScore(score) {
    if (score < 1.5) return 1;
    if (score < 2.5) return 2;
    return 3;
}

function restartAssessment() {
    currentPage = 0;
    answers = {};
    localStorage.removeItem('assessmentAnswers');
    loadPage(currentPage);
    updateProgress(); // Fortschritt zurücksetzten 
    document.getElementById('results-container').style.display = 'none';
    document.getElementById('questions-container').style.display = 'block';
    document.getElementById('prev-button').style.display = 'inline-block';
    document.getElementById('next-button').style.display = 'inline-block';
}

function changePage(pageId) {
    if (pageId >= 0 && pageId < data.pages.length) {
        saveAllAnswers(); // Speicher Antworten vor Seitenwechsel
        currentPage = pageId;
        loadPage(currentPage); // neue Seite laden
        updateProgress(); // Aktualisiere Fortschritt
    }
}

function calculateScore() {
    // Speichern von Antworten, bevor ergebnisse berechnet werden
    saveAllAnswers();

    const categories = data.pages.filter(page => page.questions && page.questions.length > 0);
    const scores = categories.map(page => {
        const answeredQuestions = page.questions.filter(q => answers[q.id] !== undefined && answers[q.id] !== 0);
        const total = answeredQuestions.reduce((sum, q) => sum + (answers[q.id] || 0), 0);
        const average = answeredQuestions.length > 0 ? total / answeredQuestions.length : 0; // Nur beantwortete Fragen zählen
        return Math.round(average * 10) / 10; // rundung von ergebnis
    });

    // Spider Chart 
    const ctx = document.getElementById('radarChart').getContext('2d');
    if (window.myChart) {
        window.myChart.destroy(); // zerstörung von vorherigem chart falls noch nicht gemacht
    }
    window.myChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: categories.map(c => c.title),
            datasets: [{
                label: 'Reifegrad',
                data: scores,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scale: {
                min: 0, // Skala beginnt bei 0
                max: 3, // Maximalwert ist 3 
                ticks: {
                    stepSize: 1 // Schrittweite  1 
                }
            }
        }
    });

    // Tabelle mit Ergebnissen
    showResults();

    // Ergebnis Container
    document.getElementById('results-container').style.display = 'block';
    document.getElementById('questions-container').style.display = 'none';
    document.getElementById('prev-button').style.display = 'none';
    document.getElementById('next-button').style.display = 'none';
}

function restartAssessment() {
    currentPage = 0;
    answers = {};
    localStorage.removeItem('assessmentAnswers');
    loadPage(currentPage);
    document.getElementById('results-container').style.display = 'none';
    document.getElementById('questions-container').style.display = 'block';
    document.getElementById('prev-button').style.display = 'inline-block';
    document.getElementById('next-button').style.display = 'inline-block';
}

function updateProgress() {
    const totalPages = data.pages.length;
    const progress = (currentPage / totalPages) * 100;
    document.getElementById('progress').textContent = `${progress.toFixed(0)}%`;
    document.getElementById('progress-bar').style.width = `${progress}%`;
}

function downloadResultsAsPDF() {
    const chartCanvas = document.getElementById('radarChart');
    const chartImage = chartCanvas.toDataURL('image/png', 1.0);

    const chartContainer = document.querySelector('.chart-container');
    const chartImageElement = document.createElement('img');
    chartImageElement.src = chartImage;
    chartImageElement.style.width = '100%';
    chartContainer.innerHTML = ''; // Lösch Canvas
    chartContainer.appendChild(chartImageElement); // Fügt Bild hinzu von chart

    // Wähle den gesamten Inhalt der Ergebnisseite aus
    const element = document.getElementById('results-container');

    // Optionen für das PDF
    const options = {
        margin: 10, // Rand 
        filename: 'ergebnisse.pdf', // Name PDF-Datei
        image: { type: 'jpeg', quality: 0.98 }, //bildqulität
        html2canvas: { scale: 2 }, // Skalierung 
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' } // PDF-Format
    };

    // pdf erstellen und herunterladen
    html2pdf().from(element).set(options).save().then(() => {
        // chart zurücksetzen nach zurücksetzten
        chartContainer.innerHTML = ''; // bild löschen
        chartContainer.appendChild(chartCanvas); // canvas neu hinzufügen
    });
}

function downloadResults(format) {
    const categorizedAnswers = {};

    // antworten nach kategorie sortieren
    data.pages.forEach(page => {
        if (page.questions && page.questions.length > 0) {
            page.questions.forEach(question => {
                const category = page.title;
                if (!categorizedAnswers[category]) {
                    categorizedAnswers[category] = {};
                }
                categorizedAnswers[category][question.text] = answers[question.id] || 'Nicht beantwortet';
            });
        }
    });

    if (Object.keys(categorizedAnswers).length === 0) {
        alert('Keine Antworten zum Herunterladen verfügbar.');
        return;
    }

    if (format === 'json') {
        // JSON herunterladen
        const results = JSON.stringify(categorizedAnswers, null, 2);
        const blob = new Blob([results], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'ergebnisse.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a); 
        URL.revokeObjectURL(url); // Gibt Speicher frei
    } else if (format === 'csv') {
        // CSV herunterladen
        let csvContent = "data:text/csv;charset=utf-8,";
        csvContent += "Kategorie;Frage;Antwort\n"; // CSV-Header
        Object.entries(categorizedAnswers).forEach(([category, questions]) => {
            Object.entries(questions).forEach(([question, answer]) => {
                csvContent += `${category},"${question.replace(/"/g, '""')}",${answer}\n`;
            });
        });
        const encodedUri = encodeURI(csvContent);
        const a = document.createElement('a');
        a.href = encodedUri;
        a.download = 'ergebnisse.csv';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a); // entfernt link nach herunterladen von der datei
    }
}

function finishTest() {
    saveAllAnswers(); // Speichert alle Antworten
    calculateScore(); // Berechnet Ergebnisse

    // zeigt container element an 
    document.getElementById('results-container').style.display = 'block';
    document.getElementById('questions-container').style.display = 'none';
    document.getElementById('prev-button').style.display = 'none';
    document.getElementById('next-button').style.display = 'none';
}

// ladet erste seite beim start
loadPage(currentPage);