---
title: Änderungsprotokoll
weight:
icon: "clipboard-list"
anchors: []
---

Diese Seite enthält eine detaillierte Aufstellung aller Pentacode Produkt-Updates inklusive der jeweils
enthaltenen Änderungen.

## 1.18.0

### Änderungen & Neuigkeiten

- Neue Pausenmodi [Geplant](https://pentacode.app/hilfe/handbuch/einstellungen/zeiterfassung/#geplant) und [Geplant + Manuell](https://pentacode.app//hilfe/handbuch/einstellungen/zeiterfassung/#geplant--manuell).
- Verbesserte Verwaltung von Zeiterfassungseinstellungen über [Zeiterfassungs-Regelsätze](https://pentacode.app/hilfe/handbuch/einstellungen/zeiterfassung/#über-zeiterfassungs-regelsätze).
- Überarbeitetes [Arbeitszeitblatt](https://pentacode.app/hilfe/handbuch/mitarbeiter/arbeitszeiten/#das-arbeitszeitblatt)
- In der [Arbeitszeiten-Übersicht](https://pentacode.app/hilfe/handbuch/mitarbeiter/arbeitszeiten/#arbeitszeiten-übersicht) werden zusätzlich zu Stunden auch Arbeits-, Urlaubs- und Kranktage angezeigt.
- Der Lohndaten-Export unterstützt nun auch den Export von Arbeits- und Fehltagen.
- Mitarbeiterzugängen können nun auch wieder [entzogen](https://pentacode.app/hilfe/handbuch/mitarbeiter/zugaenge-rechte/#zugang-entziehen) werden.
- In den Ausdrucken "Arbeitszeitnachweis" und "Lohnabrechnung Individuell" werden nun Feiertage hervorgehoben.
- Für den Export des Kassenbuchs in das Format "Datev Buchungsstapel" kann nun eine benutzerdefinierte [Sachkontenlänge](https://pentacode.app/hilfe/handbuch/einstellungen/buchhaltung/#sachkontenlänge) angegeben werden.

### Behobene Fehler

- Beim Drucken von veröffentlichen Dienstplänen kam es bei Abteilungen mit sehr vielen Mitarbeitern manchmal zu Darstellungsproblemen.
- In den Pausenmodi "Automatisch" und "Automatisch + Manuell" war es nicht möglich eine abweichende Pause von 0 einzugeben.
- Bei der Eingabe von
  [Nachtzuschlags-Zeiträumen](https://pentacode.app/hilfe/handbuch/einstellungen/sonstiges/#nachtzuschläge) wurden
  bestimmte valide Nacht1-Zeiträume nicht akzeptiert (z.B. 20:00 - 22:00).
- Bei manchen Mitarbeitern wurde in der Kontenansicht ein Wert für die SFN-Pausche angezeigt obwohl diese im Vertrag deaktiviert war.
- Im Ausdruck "Lohnabrechnung Individuell" kam es in manchen Fällen zu einer überlappenden Darstellung der Umsatz- und Provisionswerte.
- Der Ausdruck "Lohnanbrechnung Individuell" zeigte bei Monaten ohne erfasste Arbeitszeiten eine leere Seite an.

## 1.17.3

### Änderungen & Neuigkeiten

- Unter **Alle Mitarbeiter / Abwesenheiten** wird jetzt bei jedem Mitarbeiter der Rest-Jahresurlaub angezeigt.

### Behobene Fehler

- Beim Ändern von Emailadressen von Mitarbeitern mit eingerichtetem Mitarbeiterzugang kam es in manchen Fällen zu einer Fehlermeldung.
- Verworfene Problemmeldungen wurden weiterhin im Dienstplan und AZ-Konto des Mitarbeiters angezeigt.
- Bei Unternehmen mit mehreren Standorten wurden in manchen Fällen beim Leeren des Dienstplans in einem Standort auch Einträge aus anderen Standorten gelöscht.
- Beim Bearbeiten von Zugängen kam es manchmal zu fehlerhaften Rollenzuweisungen.
- Das Einrichten von Verwaltungszugängen war aufgrund eines Fehlers nur mit freigeschalteter Mitarbeiterapp möglich.

## 1.17.2

### Änderungen & Neuigkeiten

- Das Ändern von Mitarbeiter-Emailadressen ist nun auch bei Mitarbeitern mit eingerichtetem Mitarbeiterzugang wieder möglich. Der Mitarbeiterzugang wird in diesem Fall zurückgesetzt und muss neu eingerichtet werden.
- Beim Speichern von Mitarbeiter-Stammdaten wird nun geprüft, ob die Emailadresse innerhalb des Unternehmens bereits vergeben ist.

### Behobene Fehler

- Das Ausstempeln aus einer Schicht war in der MA-App nur bis zu einer Stunde nach geplantem Schichtende möglich, unabhängig von den geltenden Zeiterfassungseinstellungen.
- Bei Mitarbeitern, deren Vertragsverhältnis in der Mitte eines Monats endet, wurde unter Mitarbeiter(einzeln)/Konten der letzte Teilmonat nicht angezeigt.
- Benutzerdefinierte Kontenüberträge / zurückgesetzte Konten wurden bei der Darstellung von Überstunden und Resturlaub im Dienstplan und in der MA-App nicht immer berücksichtigt.
- Zeitbuchungen mit einem Buchungswert von 0 wurden in AZ-Nachweisen nicht mit aufgeführt.

## 1.17.1

### Änderungen & Neuigkeiten

- Die neue Ansicht **Alle Mitarbeiter / Stammdaten** bietet Ihnen eine tabellarische Übersicht aller Mitarbeiter-Stammdaten und Zeiterfassungs-PINs inklusive Filter- und Druckfunktion.

### Behobene Fehler

- Beim Anlegen neuer Mitarbeiter wurden diese doppelt angelegt.
- Im Bereich **Umsätze** zeige das Kalender-Element manchmal den falschen Monat an.
- Beim Einrichten von Mitarbeiterzugängen für mehrere Mitarbeiter mit identischen Emailadressen kam es anschließend zu Loginproblemen.
- Die Digitale Stempleuhr konnte auf älteren iOS Versionen (iOS 12.x) und älteren Versionen des Google Chrome Browsers (v79 oder älter) nicht mehr geladen werden. **HINWEIS:** Die Kompatibilität mit diesen Versionen wurde wiederhergestellt - **allerdings empfiehlt es sich dennoch, sämtliche Software auf Ihren Geräten auf dem aktuellsten Stand zu halten**, um zukünftige Sicherheits- und Kompatibilitätsprobleme zu vermeiden.

## 1.17.0

### Änderungen & Neuigkeiten

- Die neue **Abwesenheits-Verwaltung** vereinfacht die Planung und Verwaltung von Urlauben und Krankmeldungen.
- Mitarbeiter können nun über die Mitarbeiter-App Urlaube beantragen und Krankmeldungen erfassen sowie geplante und vergangene Abweisenheiten über die App einsehen.
- Der Bereich **Mitarbeiter / Berechtigungen** wurde in **"Zugänge & Rechte"** umbenannt und umfasst nun auch die Berechtigungen für die Mitarbeiter-App, über die einzelne Features wie Dienstplan, Überstundenanzeige etc. für alle oder einzelne Mitarbeiter aktiviert oder deaktiviert werden können.
- Mitarbeiter können nun per Email zum Einrichten ihres Mitarbeiter- und/oder Verwaltungszugangs eingeladen werden.
- In der Dienstplananzeige der Mitarbeiter-App werden ungesehene Änderungen nun explizit angezeigt.
- In der Dienstplanansicht des Verwaltungs-Zugangs kann wird nun bei jedem Eintrag angezeigt, ob der Mitarbeiter die aktuellste Änderung gesehen hat (erfordert die Nutzung der Mitarbeiter-App mit Berechtigung "Dienstplan").
- Außerdem wird nun angezeigt, wann die letzte Änderung an einem bestimmten Eintrag vorgenommen wurde und wann und ob diese bereits veröffentlicht wurde.
- Beim Veröffentlichen von Dienstplanänderungen kann nun explizit gewählt werden, welche der betroffenen Mitarbeiter eine Emailbenachrichtigung erhalten sollen.
- Im Verwaltungs-Dienstplan werden nun nicht mehr einzelne Urlaubs- oder Kranktage angezeigt/bearbeitet sondern die entsprechenden Abwesenheits-Zeiträume.
- Im Kassenbuch und der Tagesabrechung kann nun auch bei einzelnen Buchungen ein Buchungsschlüssel angegeben werden (war vorher nur über Umsatzgruppen möglich).
- Für Umsatzgruppen kann nun definiert werden, ob diese automatisch in der Tagesabrechnung aufgelistet werden sollen (war bisher immer der Fall).
- Die Zeiterfassungs-PIN eines Mitarbeiters ist nun unter **Mitarbeiter / Stammdaten** zu finden (war vorher unter Mitarbeiter / Zeiterfassung).

### Behobene Fehler

- Im Kassenbuch wurde kein korrekter Monats-Endbestand anzeigt, falls keine Buchungen in diesem Monat vorlagen.

## 1.16.4

### Behobene Fehler

- [Safari] Schichtänderung im Dienstplan wurden nicht übernommen.
- In manchen Fällen war der Logout über die MA-App nicht möglich.

## 1.16.3

### Änderungen & Neuigkeiten

- Fehltage (z.B. Urlaub, Krank, Guttag, Frei) müssen/können nicht mehr explizit veröffentlicht werden und führen somit nicht mehr zu ungewollten Dienstplanbenachrichtungen.
- Beim Export von Lohn-Bewegungsdaten wird das Vorliegen von mehreren Verträgen eines Mitarbeiters im Export-Zeitraum nicht mehr als Fehler behandelt.

### Behobene Fehler

- Durch einen Darstellungsfehler wurde im Arbeitzeitkonto von manchen Mitarbeitern Fehltage mit 0 Stunden ausgewiesen.
- Umsatzgruppen in der Tagesabrechnung wechselten nach dem Zwischenspeichern manchmal die Reihenfolge.

## 1.16.2

### Behobene Fehler

- Geplante aber noch nicht abgeschlossene Schichten wurden in den Ausdrucken "AZ-Nachweis" und "Lohnabrechnung Individuell" fälschlicherweise mit aufgeführt (mit einer Dauer von 0).
- Wurde eine Dienstplanvorlage angewendet und anschließend der Dienstplan geleert, konnte die gleiche Vorlage nicht erneut angewendet werden.
- Die Überstundenanzeige in der Dienstplan-Tagesansicht zeigte immer einen Betrag von 0 an (auch wenn tastächlich ein anderer Wert vorlag).
- Bei der im Bestätigungsdialog für das Veröffentlichen von Dienstplanänderungen angezeigte Anzahl von zu benachrichtigenden Mitarbeitern war in manchen Fällen zu hoch (Betroffene Mitarbeiter, für die diese Benachrichtigung deaktiviert war wurden nicht abgezogen).

## 1.16.1

### Behobene Fehler

- Das Anwenden von Dienstplanvorlägen war in manchen Fällen nicht mehr möglich.
- In der Mitarbeiter-App wurden der falsche Wert für die Überstunden am Monatsanfang angezeigt.
- Bei halboffenen Schichten wurden teilweise falsche Problemmeldungen generiert.

## 1.16.0

### Änderungen & Neuigkeiten

- Überarbeitetes Design für die Mitarbeiter-App
- Anzeige von Arbeitszeitkonten und Resturlaub in der Mitarbeiter-App
- Automatische Benachrichtungen bei Dienstplanänderungen können nun über den Bereich **Mitarbeiter / Benachrichtungen** aktiviert oder deaktiviert werden.
- Alternative Druckfunktion im Dienstplan: Über das Tastenkürzel **STRG + P** (bzw. **CMD + P** auf Mac) kann der **aktuelle Bearbeitungsstatus** gedruckt werden. Mehr Infos [hier](https://pentacode.app/hilfe/handbuch/dienstplan/schreiben/#dienstplan-drucken).
- Beim Erstellen und Anwenden von Dienstplanvorlagen werden nun automatisch die Filterkriterien des aktiven Tabs angewendet. Mehr Infos dazu [hier](https://pentacode.app/hilfe/handbuch/dienstplan/schreiben/#dienstplan-vorlagen).
- Beim Leeren des Dienstplans werden nur Schichten gelöscht, die den Filterkriterien des aktuellen Tabs entsprechen.
- Im Arbeitszeitkonto werden nun wieder auch geplante Schichten angezeigt, sind dort allerdings nicht bearbeitbar.
- Die Urlaubsanzeige im Dienstplan zeigt nun den Urlaubsanspruch und Resturlaub für das gesamte Jahr an.

### Behobene Fehler

- Die Urlaubsanzeige im Dienstplan zeigte falsche Werte an.
- Beim Lohndaten-Export in das "LohnAG" Format wurden Arbeitszeiten mit dem falschen Status-Kürzel exportiert.
- Bei geplanten Schichten mit offenem Schichtende wurde die Zeiterfassungsregel "Übernehme Zeit laut Dienstplan" nicht korrekt angewandt.
- Bei manchen Betrieben kam es beim Drucken von veröffentlichen Dienstplänen zu Anzeigeproblemen.

## 1.15.1

### Änderungen & Neuigkeiten

- Die Einstellung "Abteilungen Spiegeln" im Dienstplan wird nun auch beim Drucken und auf der öffentlichen Dienstplan-Seite übernommen.

### Behobene Fehler

- Änderungen in den Zeiterfassungs-Einstellungen einzelner Mitarbeiter wurde nicht übernommen.

## 1.15.0

### Änderungen & Neuigkeiten

- **Komplett überarbeiteter Dienstplan mit verbesserten Schichtvorschlägen, einer erweiterten Filterfunktion und mehr!** Details finden Sie im neuen [Hilfeartikel](https://pentacode.app/hilfe/handbuch/dienstplan/).
- Erweiterte Farbauswahl für Abteilungen
- Einzelnen Positionen können nun eigene Farben zugewiesen werden.
- Einige kleinere Verbesserungen im Kassenbuch.
- Zeit- und Urlaubsbuchungen mit Kommentar werden im Bereich **Alle Mitarbeiter / Arbeitszeiten** und im Ausdruck "Lohnabrechnung Übersicht" nun getrennt ausgewiesen (Zeitbuchungen mit identischem Kommentar werden zusammengefasst).
- Geburtstagskinder werden im Bereich **Zeiterfassung** und in der digitalen Stempeluhr nun mit einem kleinen Icon hervorgehoben.

### Behobene Fehler

- Teilschichten wurden bei der Berechnung der durchschnittlichen Arbeitszeit für Fehltage nicht korrekt berücksichtigt (mehr dazu per Email).

## 1.14.2

### Änderungen & Neuigkeiten

- Im Kassenbuch-Ausdruck werden nun auch Anfangs- und Endbestand angezeigt.

### Behobene Fehler

- Bei manchen Mitarbeitern wurden in den Kontenansichten beitragspflichtige Zuschläge nicht richtig angezeigt.
- Der Anfangsbestand im Kassenbuch wurde in manchen Fällen nicht korrekt angezeigt.
- In manchen Fällen wurde das Vertragsende im Vertragsformular nicht richtig dargestellt.
- Bei Mitarbeitern mit einem befristeten Vertrag reichte die individuelle Kontenansicht zu weit in die Zukunft.

## 1.14.1

### Änderungen & Neuigkeiten

- Es kann nun eingestellt werden, ob bei der Saldierung von SFN-Konten beitragspflichtige Zuschläge mit einbezogen werden sollen oder nicht. (Zu finden unter **Einstellungen > Sonstiges**).
- Einzelne Abteilungen können nun so konfiguriert werden, dass alle SFN-Zuschläge als beitragspflichtig behandelt werden. Dies ist vor allem für jene Unternehmen sinnvoll, die Kurzarbeit in Form einer eigenen Abteilung abgebildet haben. (Zu finden unter **Einstellungen > Arbeitsbereiche** in den Einstellungen der einzelnen Abteilungen).
- Das Geburtsdatum kann nun auch direkt bei Anlegen eines Mitarbeiter angegeben werden.

### Behobene Fehler

- Bei ausgeschiedenen Mitarbeitern wurde in der Kontenansicht auch Monate, die über das Vertragsende hinausgingen, angezeigt.
- Beim Speichern von Geburtstagen wurde ein Datum nach dem 01.01.1970 gefordert.

## 1.14.0

### Änderungen & Neuigkeiten

- [Beta] Kontaktloses Stempeln per Mitarbeiter-App (Freischaltung auf Anfrage)
- Überarbeitete Hilfe-Funktion
- Aktualisierte Mindestlöhne für 2021 und 2022
- Benutzerfreundlicheres Verhalten bei der Änderung des Datums von Kassenbucheinträgen.

### Behobene Fehler

- Im Kassenbuch wurde kein korrekter Anfangssaldo angezeigt solange noch keine Einträge in dem entsprechenden Monat vorlagen.
- Bei der Bearbeitung von Lohnartensätzen kam es bei manchen Nutzer zu Problemen.
- Bei der Bearbeitung von Mitarbeiter-Stammdaten wurde in manchen Fällen irrtümlich eine "Passwort Wählen"-Email versand.

## 1.13.1

### Änderungen & Neuigkeiten

- **Beim Kassenbuch-Export wird ab sofort standartmäßig kein Buchungsschlüssel mehr exportiert um Konflikte mit Automatikkonten zu vermeiden.** Kassenbucheinträge, bei denen ein expliziter Buchungsschlüssel exportiert werden soll müssen als Umsatzgruppe angelegt werden, in der ein solcher Buchungschlüssel definiert werden kann.
- Beim Kassenbuch-Export in das Format "Datev-Buchungstapel" wird ab sofort das Feld "Festschreibung" basierend auf dem Festschreibungsstatus in Pentacode gesetzt. D.h. bei festgeschriebenen Einträgen wird das Festschreibungszeichen gesetzt, ansonsten nicht.
- Beim Lohndatenexport können nun optionalerweise auch Fehltagsstunden für Gehaltsempfänger exportiert werden.
  Hierfür müssen lediglich die entsprechenden Lohnarten unter **Einstellungen / Lohnarten** eingefügt werden.
- Beim Ausdruck "Lohnabrechnung Individuell" wird in der Kopfzeile nun der Unternehmensname angezeigt.
- Beim Ausdruck "Lohnabrechnung Individuell" wird bei Provisionsempfängern zusätzlich zum Provisionsbetrag nun auch der erwirtschaftete Umsatz angezeigt.
- Beim Kassenbuch-Export kann nun ein abweichendes Buchungskonto angegeben werden (nützlich bei mehreren Standorten mit unterschiedlichen Buchungskonten).
- Im Ausdruck "Arbeitszeiten Nachweis" werden nun auch Kommentare bei Schichten und Zeit-/Urlaubsbuchungen angezeigt.
- Beitragspflichtige SFN-Zuschläge werden nun auch in den Kontenansichten für alle Mitarbeiter getrennt ausgewiesen.
- Im MA-Arbeitszeitkonto werden nun auch freie Tage angezeigt.
- Vertragsunterbrechnungen werden neben dem Dienstplan nun auch im Arbeitszeitkonto eines Mitarbeiters angezeigt.

### Behobene Fehler

- Beim Drucken eines Arbeitszeit-Nachweises für einen leeren Monat wurde ein leeres Blatt ausgegeben.

## 1.13.0

### Änderungen & Neuigkeiten

- In den Mitarbeiterverträgen können nun feste Wochentage inkl. Stundenanzahl
  gewählt werden, was bei Mitarbeitern mit regulären Arbeitszeiten eine
  genauere Berechnung von Soll- und Fehlstunden ermöglicht.
- Bei der Berechnung der monatlichen Differenz im SFN-Konto werden nun nur
  beitragsfreie Zuschläge berücksichtigt. Beitragspflichtige Zuschläge werden
  getrennt ausgewiesen.
- Das Bearbeiten von vergangenen Tagen im Dienstplan erfordert nun eine explizite Berechtigung.
- Es können nun Schichten angelegt werden, die einen kompletten Kalendertag
  umfassen. Dies gelingt indem man eine Startzeit von 00:00 Uhr und eine Endzeit von 24:00 Uhr
  eingibt.

### Behobene Fehler

- Beim Export des Kassenbuchs in das Datev-Buchungsstapel-Format wurde die Kostenstelle nicht mit exportiert.
- Nach Ändern des Kontoführungsbeginns unter **Einstellungen / Sonstiges** erschien der Speichern-Button nicht.
- Bei manchen Mitarbeitern wurden in der Kontenübersicht Monate angezeigt, die vor dem eingestellten Kontoführungsbeginn lagen.
- In seltenen Fällen kam es bei Mitarbeitern zu Rundungsfehlern bei der Berechung des effektiven Stundenlohns.
- Es konnten keine Berechtigungen für die Bereiche **Berichte / Umsatz** und **Berichte / Arbeitszeit** zugewiesen werden.
- In den Bundesländern Thüringen, Bremen und Hamburg wurde der Reformationstag nicht als Feiertag gerechnet.

## 1.12.4

### Änderungen & Neuigkeiten

- Bei der Dienstplanansicht in der Stempeluhr kann nun durch mehrere Wochen "geblättert" werden.

### Behobene Fehler

- Beim Öffnen eines veröffentlichten Dienstplans auf mobilen Geräten konnte nicht gescrollt werden.
- Der "Bezahlt" Status von Debitoreneinträgen aus festgeschriebenen Zeiträumen konnte nicht verändert werden.
- Beim Bearbeiten von Einträgen im Menüpunkt "Zeiterfassung" kam es bei manchen Nutzern zu Problemen in Verbindung mit einer
  Neuanordnung der Einträge.
- Beim Erstellen von Splitbuchungen im Kassenbuch wurde bei der Anzeige des Nettobetrages manchmal der falsche Steuersatz verwendet.
- Beim Erstellen von Splitbuchungen im Kassenbuch wurde bei bestimmten Beträgen fälschlicherweise ein abweichender Gesamtbetrag gemeldet.

## 1.12.3

### Behobene Fehler

- Generierte Rechnungen unter **Einstellungen > Rechnungsstellung** wiesen teilweise falsche Leistungszeiträume aus.
- Behebung verschiedener Perfomance-Engpässe

## 1.12.2

### Behobene Fehler

- Beim Speichern in der Tagesabrechnung wurde die Seite nicht neu geladen bzw. der
  Bearbeitungsmodus nicht verlassen, was den Eindruck erweckte, dass der
  Speichervorgang nicht funktionierte. Bei mehrmaligen Drücken des "Abschliessen und Buchen"
  Buttons wurde die eingegeben Einträge dann mehrmals gebucht, was zu Duplizierten Einträgen führte.
  Falls Sie hiervon betroffen waren können Sie die doppelten Einträge einfach löschen, indem Sie in der
  Tagesabrechnung bei den entsprechenden Einträgen den Betrag auf Null setzen und erneut "Abschließen und Buchen" wählen.

## 1.12.1

### Änderungen & Neuigkeiten

- Tagesabrechnungseinträge können nun gelöscht werden, indem der Betrag vor dem Speichern auf Null gesetzt wird.

### Behobene Fehler

- Benutzer, deren Account mit mehreren Unternehmen verknüpft sind konnten sich nicht in der Stempeluhr anmelden.
- Die Druckansicht des Bereiches **Zeiterfassung** war fehlerhaft.
- Bei der Drag & Drop Funktion im Dienstplan kam es bei manchen Nutzern zu Problemen.

## 1.12.0

Gute Neuigkeiten: Pentacode kann ab sofort neben Google Chrome
auch in **Firefox**, **Safari** und **Microsoft Edge** (v80 und neuer) ohne Einschränkugen
verwendet werden! Da die App in diesen Browsern noch nicht so ausführlich
getestet wurde wie in Chrome kann es vereinzelt noch zu Problemen kommen,
aber wir bemühen uns diese innerhalb der nächsten Updates zu beheben!

### Änderungen & Neuigkeiten

- Es ist nun möglich, mit dem gleichen Benutzernamen und Passwort mehrere Unternehmen zu verwalten!
- Standorte können nun bei Bedarf in ein eigenes Unternehmen umgezogen werden.
- Neuer Bereiche **Berichte > Übersicht**
- Neues Feature: **Splitbuchungen** im Kassenbuch
- Beim Buchen von Tagesabrechnungen werden aus Gründen der Prüfungssicherheit Ausgaben nun immer vor Einnahmen
  gebucht.
- Neuer Bereich: **Einstellungen > Rechnungsstellung**. Hier können Sie Ihre Rechnungsanschrift und Zahlungsmittel verwalten
  und vergangene Rechnungen einsehen.

### Behobene Fehler

- Beim Bearbeiten und erneuten Buchen einer Tagesabrechung blieb die urpsprüngliche Reihenfolge der Buchungen im Kassenbuch nicht immer erhalten.
- Beim Löschen von Einträgen in der Tagesabrechnung wurden manchmal Laufnummern und Saldi nicht neu berechnet.
- Viele andere kleinere Fehler :)

## 1.11.1

### Änderungen & Neuigkeiten

- Bei der Dienstplananzeige in der Stempeluhr werden nun nur die ausgewählten/gefilterten
  Abteilungen angezeigt.

### Behobene Fehler

- Bei der Eingabe von Zusatzleistungen konnten keine Nachkommastellen angegeben werden.
- Beim Lohndatenexport in das Lohn AG format wurden Schichten mehrfach exportiert.

## 1.11.0

### Änderungen & Neuigkeiten

- Neues Feature: [Umsatzgruppen](https://support.pentaco.de/article/63-umsatzgruppen)
- Neuer Bereich **Berichte / Umsätze**
- Verbesserte Tools für die Planung von Umsätzen und Stundenvorgaben (beta)
- SFN-Pauschalen in Teilmonaten werden nun partiell berechnet, d.h. falls ein
  Vertrag mit SFN-Pauschale nur einen Teile des Monats abdeckt wird die
  Pauschale anteilig reduziert.
- In Mitarbeiterverträgen können nun mehrere Zusatzleistungen angegeben werden.
- Zusatzleistungen werden nun im Lohnkostenbericht angezeigt.
- Die Mitarbeiter-Quickinfo im Dienstplan beinhaltet nun auch die bereits geleisteten Stunden
  des aktuellen Monats.
- Im Kassenbuch werden nun Anfangs- und Endbetrag des ausgewählten Monats angezeigt.
- Bei unbaren Zahlungen, Rechnungen und Gehaltsvorschüssen in der Tagesabrechnung kann nun auch eine Kostenstelle angegeben werden.
- Neues Format für Lohndatenexport: Lohn AG

### Behobene Fehler

- Wochenübergreifende Fristverletzungen wurden im Dienstplan nicht angezeigt.

## 1.10.3

### Behobene Fehler

- Bei der Datumsauswahl für den Lohndaten-Export wurde fälschlicherweise der erste Tag des Folgemonats mit ausgewählt.
- Kontenüberträge mit einem Wert von 0 wurden bei der Saldierung ignoriert.
- Die Anzeige von Dauern in der Stunden:Minuten-Form war in manchen Fällen fehlerhaft (z.B. 5:60 statt 6:00).

## 1.10.2

### Änderungen & Neuigkeiten

- Zusätzlich zum AZ-Konto und Urlaubskonto kann nun auch für das SFN-Konto jeden Monat ein beliebiger Übertrag definiert werden.
- Die Druckfunktion in der Tagesabrechnung ist nun auch für nicht abgeschlossene Tage freigeschaltet.

## 1.10.1

### Änderungen & Neuigkeiten

- Für den Lohndatenexport nach Datev Lohn & Gehalt kann nun ein beliebiger Zeitraum ausgewählt werden.

### Behobene Fehler

- Bei der Berechnung der Ist-Stunden für die Zielorientierte Dienstplanung wurden automatische Pausen falsch
  einberechnet.

## 1.10.0

### Änderungen & Neuigkeiten

- **Neues Feature**: [Zielorientierte Dienstplanung](https://support.pentaco.de/article/59-planungsziele-definieren)
- Neuer Bericht: Arbeitszeit
- Beim Festschreiben des Kassenbuches kann nun ein bestimmtes Datum gewählt
  werden, bis zu dem festgeschrieben werden soll.
- Bei Debitoreneinträgen im Kassenbuch kann nun auch ein Steuersatz angegeben werden.

### Behobene Fehler

- Die rechte Spalte im Dienstplan sprang nach dem Scrollen immer wieder in die Ausgangsposition zurück.
- Das €-Zeichen und manche andere Sonderzeichen in Buchungstexten führten zu Problemen beim Kassenbuch-Export.
- Bei der Anzeige von Schicht- oder Pausenlängen wurde gelegentlich durch einen Rundungsfehler eine Minute zu wenig angezeigt.

## 1.9.6

### Behobene Fehler

- Bei der Eingabe von Rechnungen in der Tagesabrechnung
  konnten beim Trinkgeld keine Nachkommastellen eingegeben werden.
- Bei manchen Zeiterfassungs-Endgeräten führte ein Mangel and verfügbarem
  Speichervolumen gelegentlich zu unvollständiger Synchronisation.
- Das Kassenbuch-Exportformat "DATEV-Buchungsstapel" wies einige Mängel in
  der Formatierung auf was bei machen Buchhaltungsprogrammen zu Problemen
  beim Import führte.

## 1.9.5

### Änderungen & Neuigkeiten

- Die Mehrwehrtsteuersätze 19% und 7% werden im Zeitraum vom 01.07.2020 bis
  zum 31.12.2020 zu den vorübergehend reduzierten Steuersätzen 16% und 5%.
  Bereits gespeicherte Umsatzvorlagen (Dropdown bei der Eingabe des Textes)
  können weiterhin verwendet werden - es werden dann automatisch die reduzierten
  Steuersätze gesetzt.
- Im Ausdruck "Arbeitszeiten-Nachweis" wird die Arbeitsdauer nun im Format
  Stunden:Minuten angezeigt und nicht wie bisher in Stunden-Dezimalbrüchen.

### Behobene Fehler

- Auf Tables mit iOS version 12.4 war in Pentatime keine Eingabe von Benutzername und Passwort
  und damit kein Login möglich.
- Bei Klicken auf den "Beheben" Button bei Tagesabrechungs-bezogenen Problemen
  navigierte die App zum aktuellen Tag, nicht zum betroffenen Datum.

## 1.9.4

### Behobene Fehler

- In der Zeile für Trinkgelder bei Debitoren im Kassenbuch gab es einen
  Abbildungsfehler.
- Tagesabrechnungen mit Rechnungen die Trinkgeld beinhalten wurden in manchen
  Fällen im Problembericht fälschlicherweise als fehlerhaft ausgewiesen.

## 1.9.3

### Änderungen & Neuigkeiten

- Im Bereich **Probleme** können Problemberichte nun nach Typ gefiltert werden.
- Fehlerhafte Tagesabrechnungen (Kassenstand stimmt nicht mit Saldo überein / fehlende Ausgleichsbuchung)
  werden nun in den Problemberichten aufgeführt und in der Kalenderansicht
  im Kassenbuch hervorgehoben.
- In der Tagesabrechnung kann bei Einnahmen und unbaren Zahlungen nun auch eine Belegnummer eingegeben werden.
- In der Tagesabrechnung kann bei unbaren Zahlungen nun auch ein Steuersatz angegeben werden.

### Behobene Fehler

- Beim Ausdruck und Export des Kassenbuches war Textfeld bei manchen Buchungen leer.

## 1.9.2

**WICHTIG**: Beim letzten Update hat sich ein Bug im Kassenbuch eingeschlichen
der bei manchen Nutzern zum Verlust von Datensätzen führte. Diese sind jedoch
in einem Backup gesichert und werden zeitnah wiederhergestellt werden.

### Behobene Fehler

- Ein Bug in der Tagesabrechnung führte bei manchen Nutzern zu Problemen
  und in Einzelfällen zum Verlust von Datensätzen.

## 1.9.1

### Behobene Fehler

- Bei der Eingabe des Datums im Kassenbuch kam es bei einigen Nutzern zu Problemen.
- Bei Gehaltsvorschüssen wurde im Kassenbuch der falsche Mitarbeitername angezeigt.
- Bei manchen Nutzern kam es beim Speichern im Kassenbuch zu Fehlermeldungen.

## 1.9.0

### Änderungen & Neuigkeiten

- Verbesserte Bedienung des Kassenbuches inklusive Vervollständigungsfunktion.
- Die Lohnkostenauswertung im Dienstplan kann nun deaktiviert werden.
- Neue Berechtigung "Umsätze / Debitoren"
- Nicht abgeschlossene Tagesabrechnungen werden nun in den Problemberichten angezeigt und in der Kalenderansicht
  im Kassenbuch hervorgehoben.
- Einträge können nun aus der Tagesabrechnung gelöscht werden indem der Betrag auf 0 gesetzt wird.
- Neuer Vorsteuersatz 10,7%

### Behobene Fehler

- Bei manchen Nutzern kam es bei der Personalkostenauswertung im Dienstplan zu Anzeigefehlern.
- Beim Ändern der Mitarbeiterreihenfolge im Dienstplan kam es bei manchen Nutzern zu Problemen.
- Bei manchen Nutzern kam es beim Speichern der Tagesabrechnung zu Fehlermeldungen.

## 1.8.1

### Behobene Fehler

- Bei Unternehmen mit mindestens einem archiviertem Standort kam es zu Fehlern beim Ändern der Grundeinstellungen.
- "Kind Krank" und "Krank In KUG" wurden im AZ-Konto und Dienstplan nicht angezeigt.
- Das Kalenderelement im Dienstplan wechselte bei manchen Nutzern nicht automatisch in den aktuellen Monat.
- Archivierte Abteilungen wurden weiterhin im veröffentlichten Dienstplan angezeigt.

## 1.8.0

### Änderungen & Neuigkeiten

- Personalkostenübersicht und graphische Auswertung im Dienstplan (erfordert Berechtigung
  **Dienstplan / Kosten Einsehen**)
- Neuer Ausdruck "Personaldatenblatt" für Mitarbeiter (Button rechts über dem Namen bzw über "Alle Mitarbeiter").
- Das Veröffentlichen von Dienstplänen erfordert nun die Berechtigung **Dienstplan / Veröffentlichen**.
- Neue Optionen für Fehltage "Kind Krank" und "Krank in KUG" (können nur
  direkt im AZ-Konto des Mitarbeiters hinzugefügt werden).
- Das Buchungskonto für den Export des Kassenbuchs kann nun unter
  **Einstellungen / Buchhaltung** permanent eingestellt werden und muss nicht
  mehr bei jedem Export angegeben werden.

### Behobene Fehler

- Beim Lohndatenexport nach Agenda gab es einen kleinen Fehler in der Formattierung des Dateinahmens
  was beim Import zu Problemen führen konnte.
- Beim Lohndatenexport nach Lodas wurde für Mitarbeiteressen der falsche
  Bearbeitungsschlüssel verwendet wodurch Lodas die Werte als Stunden und nicht
  als Anzahl interpretiert hat.
- Beim Bearbeiten von Mitarbeiterverträgen tauchten manche über den
  Vertragszeitraum aufgetretene Probleme wieder im Bereich **Probleme** auf
  obwohl sie bereits verworfen waren.
- Bei der Berechung des effektiven Stundenlohns für die Überprüfung von Mindeslohnunterschreitungen
  wurde der Lohn für Guttage nicht berücksichtigt was zu inkorrekten Fehlermeldungen führte.

## 1.7.4

### Änderungen & Neuigkeiten

- Neue Berechtiung "Mitarbeiter/Vorschüsse" für Mitarbeiterzugänge.

### Behobene Fehler

- Bei der Berechnung von Saldi im Kassenbuch und in der Tagesabrechnung kam
  es durch einen Rundungsfehler gelegentlich zur Fehlermeldung "Negativsaldo"
  trotz neutralem Kassenstand.
- Der Export von Lohnberichten war bei manchen Nutzern trotz fehlender
  Berechtigung "Mitarbeiter/Löhne" möglich.

## 1.7.3

### Änderungen & Neuigkeiten

- Neues Beschäftigungsverhältnis "Azubi"

### Behobene Fehler

- Bei der Erstellung einer spontanen Schicht war die Auswahl von Positonen möglich, deren Abteilung
  eigentlich durch den Abteilungsfilter ausgeschlossen war.

## 1.7.2

### Änderungen & Neuigkeiten

- Überarbeitete Darstellung der Soll/Ist-Wochenstunden sowie Konten-Quickinfo von Mitarbeitern im Dienstplan.
- Einzelne Felder in Lohartensätzen können nun leer gelassen werden um entsprechende Datensätze vom Export auszuschließen.
- Im Bereich "Zeiterfassung" kann nun nach einzelnen Mitarbeitern gesucht werden.
- Druckfunktion für den Bereich "Zeiterfassung"
- In der digitalen Stempeluhr (Pentatime) kann nun ein Ereignisprotokoll direkt
  and das Pentacode Supportteam geschickt werden (Steuercode \*99#). Dies kann
  in manchen Fällen bei der Diagnose von Problemen hilfreich sein.

### Behobene Fehler

- Die Wochenstunden von Mitarbeitern im Dienstplan wurde falsch berechnet.
- Beim Lohndaten-Export wurde in manchen Fällen die Fehlstunden für Urlaubs- und Kranktage falsch berechnet.

## 1.7.1

### Behobene Fehler

- Beim Lohndatenexport wurden bei der Verwendung mehrerer Lohnartensätze die Lohnarten nicht immer korrekt zugewiesen.
- Beim Lohndatenexport wurde nicht der korrekte Monatszeitraum verwendet (der letzte Tag des Monats viel weg).
- Am ersten des Monats kam es zu Darstellungsproblemen im Bereich "Berichte / Ersparnis".

## 1.7.0

### Änderungen & Neuigkeiten

- Neuer Bereich "**Berichte**"
- Der Bereich "Mitarbeiter / Lohnkosten" wurde durch den Bereich "Berichte / Personalkosten" ersetzt.
- Prozentsätze für SFN-Zuschläge werden nun im Ausdruck "Lohnabrechnung Individuell" aufgeführt.
- Soll- und Iststunden werden nun auf dem Ausdruck "Arbeiszeit Nachweis" aufgeführt.
- Vertragsunterbrechungen können nun über einen Zeitraum von einem Tag angelegt werden.
- Im Bereich "Zeiterfassung" können Schichten nun nach Abteilungen gefiltert werden.
- Im Bereich "Zeiterfassung" wird bei abgeschlossenen Schichten nun die finale Arbeitszeit angezeigt.

## 1.6.0

### Änderungen & Neuigkeiten

- Kassenzählprotokoll in Tagesabrechnung und Kassenbuch
- Druckfunktion für Tagesabrechnung (Tag muss abgeschlossen sein)
- Neuer Bereich **Umsätze / Debitoren**
- Neuer Bereich **Mitarbeiter / Vorschüsse**
- Prozentbetrag für Provision im Mitarbeitervertrag kann nun auf zwei Nachkommastellen genau angegeben werden.
- Wochenstunden im Mitarbeitervetrag können nun auf drei Nachkommastellen genau angegeben werden.

### Behobene Fehler

- Im Dropdown für die Auswahl des Mitarbeiters bei der Eingabe eines Gehaltsvorschusses wurden fälschlicherweise
  auch ausgeschiedene Mitarbeiter angezeigt.
- Bei alleiniger Auswahl von "Frei" beim Leeren des Dienstplan wurden die entsprechenden Einträge nicht gelöscht.

## 1.5.4

### Behobene Fehler

- Mitarbeiter für die noch keine Arbeitszeiten hinterlegt waren erschienen nicht im Dienstplan.
- Der Bereich "Arbeitszeiten" wurde bei Mitarbeitern, für die noch keine Arbeitszeiten hinterlegt waren, nicht angezeigt.

## 1.5.3

### Änderungen & Neuigkeiten

- Druckfunktion für die Monats-Kontenübersicht alle Mitarbeiter und Kontenansicht für einzelne Mitarbeiter
- Benutzerdefinierte Überträge können nun im Mitarbeiterkonto in beliebigen Monaten eingefügt werden.
- Benutzerdefinierte Kontenüberträge können nun entfernt (und damit die normale Saldierung wiederhergestellt) werden.
- Soll- und Iststunden im Mitarbeiter-Arbeitszeitkonto werden nun mit zwei Nachkommastellen angezeigt.

### Behobene Fehler

- Das Hochladen von Mitarbeiter-Profilfotos auf Endgeräten ohne verfügbare Kamera war nicht möglich.
- Bei der Auswahl von Positionen für das Loggen einer Spontanen Schicht wurden Positionen angezeigt, deren Abteilung eigentlich
  von der elektronischen Zeiterfassung ausgeschlossen waren.

## 1.5.2

### Behobene Fehler

- Fehler beim Laden von Schichten im Dienstplan und Zeiterfassung

## 1.5.1

### Änderungen & Neuigkeiten

- Beim Dienstplanversand wird in der Emailsignatur statt "Ihr Pentacode Team" nun der Name des versendenden Benutzers angezeigt.

### Behobene Fehler

- Urlaubs-, Krank- und Guttage wurden im Dienstplan nicht angezeigt.
- Lohndaten-Exportdateien für Datev Lodas enthielten einen Formatierungsfehler, der Probleme beim Import verursachte.

## 1.5.0

### Änderungen & Neuigkeiten

- Verbindungsstatus-Anzeige in der digitalen Stempeluhr (rotes Licht bedeutet fehlende Verbindung).
- Konten-Jahresübersicht für alle Mitarbeiter
- Jahresüberträge können nun in der Kontenansicht für einzelne Mitarbeiter bearbeitet werden.
- Neue Funktion "Konten Zurücksetzen" in der Konten-Jahresübersicht
- Bei der Erstellung von Schichtvorschlägen werden nun auch vergangene Wochen berücksichtigt.
- Dienstplanvorlagen können nun auch in vergangenen Wochen angewendet werden.
- Mitarbeiter werden nun konsequent nach Nachnamen und nicht nach Vornamen sortiert.
- Mitarbeiter können nun auch nach Personalnummer gefiltert werden.
- Neue Felder für zweite Telefonnummer und Bemerkungen in Mitarbeiter-Stammdaten

### Behobene Fehler

- Favorisierte Schichtvorlagen wurden doppelt angezeigt.
- Beim Lohndaten-Export wurde fälschlicherweise ein Fehler angezeigt falls ein Mitarbeiter nicht über
  den gesamten Abrechnungszeitraum angestellt war.

## 1.4.5

### Behobene Fehler

- Beim Kassenbuchexport in das Format "DATEV Buchungsstapel" wurden Beträge > 1000 € falsch formatiert (DATEV versteht keine Tausender-Trennpunkte),
  was zu Fehlern beim Import führte.

## 1.4.4

### Änderungen & Neuigkeiten

- Überarbeitete Ansicht "Konten" für einzelne Mitarbeiter
- Verbesserte Performance bei der Bearbeitung im Dienstplan
- Es kann nun ein beliebiges Buchungskonto für den Export des Kassenbuchs angegeben werden.

### Behobene Fehler

- Bei der Berechnung von automatischen Pausen wurden die Grenzwerte fehlerhafterweise inklusiv interpretiert,
  d.h. es wurden z.B. bereits bei genau 6 Stunden Schichtdauer 30 Minuten Pause berechnet.
- Beim Kassenbuchexport in das Format "DATEV Buchungsstapel" wurden Belegnummern nicht mitexportiert.
- Beim Hinzufügen/Entfernen von Dienstplanvorlagen wurde die entprechende Änderung nicht sofort sichtbar.
- Bei der Eingabe im Kassenbuch und in der Tagesabrechnung waren Umsatzsteuer und Vorsteuer falsch beschriftet
  bzw. dem falschen Steuerschlüssel zugeordnet.

## 1.4.3

### Behobene Fehler

- Bei der Eingabe von Arbeitszeiten über den Dienstplan wurden automatische Pausen falsch berechnet (es wurde immer der Maximalwert herangezogen).
  Sie können die Pausen erneut berechnen lassen indem Sie die Pausenzeiten für die jeweiligen Schichten einmal herauslöschen. Dies können Sie
  am bequemsten unter dem Menüpunkt "Zeiterfassung" tun.

## 1.4.2

### Änderungen & Neuigkeiten

- Im Dienstplan können nun auch Schichten in der Vergangenheit bearbeitet werden.
- Die Funktion "Dienstplan Leeren" erlaubt nun auch das Löschen von abgeschlossenen Schichten und Fehltagen.

## 1.4.1

### Behobene Fehler

- Bei der Berechnung von Arbeitszeiten wurde fälschlicherweise die Pause doppelt abgezogen.
- In der elektronischen Stempeluhr wurde die Mitarbeiter-Kurzinfo angezeigt, obwohl diese Option
  in den Einstellungen deaktiviert war und umgekehrt.

## 1.4.0

### Neuigkeiten

- Zeiterfassungs-Einstellungen können nun auf Standort- Abteilungs- und Mitarbeiterebene definiert werden.
- Benutzerdefinierte Automatische Pausen
- Bei der Angabe 'bezahlte Pausen' kann nun zwischen automatischen und gestempelten Pausen unterschieden werden.
- Bei Mitarbeitern mit Provisionsregelung kann nun für jede Schicht ein Umsatz eingegeben werden.
- Provisionen werden nun in der Lohnabrechung und Kostenübersicht berücksichtigt.
- Neuer Modus "Monatsgenau Ohne Feiertage" für Sollstundenberechnung.
- Die elektronische Stempeluhr kann nun auf bestimmte Abteilungen eingeschränkt werden. Dies ist hilfreich
  für das "splitten" auf mehrere Endgeräte.
- Neues Feld "Kommentare" im Vertragsformular
- Vertragsunterbrechungen wie Elternzeit oder unbezahlter Urlaub können nun über einen vereinfachten Dialog eingegeben werden. Dafür beim Bearbeiten des bestehenden Vertrags einfach die Option "Vertragsunterbrechung" wählen.

### Behobene Fehler

- In der Tagesabrechnung wurden als Optionen für den Steuerschlüssel bei Ausgaben Umsatzsteuer statt Vorsteuer aufgeführt.
- Für Urlaubsbuchungen wurden fälschlicherweise Nachtzuschläge berechnet.

## 1.3.2

### Änderungen

- Im Ausdruck der "Lohnabrechnung Übersicht" werden Mitarbeiter nun nach dem Nachnamen sortiert.
- Bei Vertragspausen wird der Saldo der Stunden- und Urlaubskontos nun weitergeführt.
- Beim Versenden des Dienstplans wird die Antwortadresse nun auf die Emailadresse des versendenden Benutzers gesetzt.
  Mitarbeiter können so bei Fragen zum Dienstplan direkt auf die Email antworten.

### Behobene Fehler

- Bei dem Ausdruck "Lohnabrechnung Übersicht" wurden Mitarbeiter, die im Laufe des angezeigten Monats ausgeschieden sind, fälschlicherweise herausgefiltert.
- Bei ausgeschiedenen Mitarbeitern wurde der Endsaldo der Stunden- und Urlaubskontos falsch angezeigt.

## 1.3.1

### Änderungen

- Veröffentlichter Dienstplan: Deutlichere visuelle Abgrenzung von Mitarbeitern
  / Tagen
- Veröffentlichter Dienstplan: Schichten werden nun abteilungsübergreifend
  dargestellt, d.h. Mitarbeiter können auf einen Blick sehen, wann sie in einer
  anderen Abteilung eingeteilt sind.

## 1.3.0

### Bemerkungen

In dieser Version ist neuerdings auch der Lohndaten-Export für Lohnbuchhaltungsprogramme möglich.
Da diese Funktion sich noch in der Entwicklungsphase befindet würden wir Sie allerdings bitten,
sie nur in enger Absprache mit unserem Supportteam zu verwenden!

### Neuigkeiten

- Neue Übersicht "Arbeitszeiten" für alle Mitarbeiter
- Neuer Ausdruck "Arbeitszeiten Nachweis" mit Unterschriftszeile für den Mitarbeiter
- Im Ausdruck "Lohnabrechnung Individuell" werden die Gesamtwerte für Arbeitszeiten und Zuschläge nun auch in Euro abgebildet.
- Ausdrucke "Lohnabrechnung Individuell" und "Arbeitszeiten Nachweis" können nun für alle Mitarbeiter in einem Schwung ausgedruckt werden.
- Neuer Bereich Einstellungen / Buchhaltung
- [beta] Lohndaten-Export für Datev "Lohn und Gehalt", Lodas, Addison, Agenda und Lexware

### Änderungen

- Der Ausdruck "Lohnabrechnung Übersicht" ist von Mitarbeiter / Lohnkosten nach Mitarbeiter / Arbeitszeiten umgezogen.
- Im Ausdruck "Lohnabrechnung Indvidiuell" werden zur besseren Übersicht nun auch frei Tage angezeigt.

## 1.2.8

### Neuigkeiten

- Buchungen, die von einer Tagesabrechung stammen werden im Kassenbuch nun
  durch einen Sternchen (\*) neben dem Datum gekennzeichnet.

### Behobene Fehler

- Beim "Abschließen & Buchen" der Tagesabrechnung wurde in manchen Fällen
  fehlerhafterweise ein Negativsaldo gemeldet

## 1.2.7

### Behobene Fehler

- Änderungen am Kassenbuch schlugen fehl falls es noch offene Tagesabrechnungen im selben Monat gab.
- Fehlendes Feld "Konto" beim Erfassen von Gehaltsvorschüssen in der Tagesabrechnung und im Kassenbuch.

## 1.2.6

### Bemerkungen

WICHTIG: Durch einen Fehler im Kassenbuch kann es bei einzelnen Standorten in
der Vergangenheit zu Fehlern in der Berechnung von Laufnummern und Saldi
gekommen sein. Zur Sicherheit empfehlen wir, diese zu überprüfen und
gegebenenfalls neu berechnen zu lassen. Dies erreichen Sie, indem Sie eine
kleine Änderung in der allerersten Buchung durchführen (zum Beispiel durch
hinzufügen eines Leerzeichens im Buchungstext). Bei Fragen hierzu können
Sie sich gerne an unser Support-Team wenden.

### Änderungen

- Tagesabrechnungen können bei bestehender Kassendifferenz nicht mehr ohne Ausgleichsbuchung abgeschlossen werden.

### Behobene Fehler

- Beim Hinzufügen von Buchungen im Kassenbuch wurden manchmal Saldi und Laufnummern falsch neu berechnet.

## 1.2.5

### Neuigkeiten

- Mitarbeiterverträge können nun gelöscht werden (in der Vertragshistorie).
- Mitarbeiter können nun gelöscht werden (erfordert separate Berechtigung).

## 1.2.4

### Neuigkeiten

- Probleme der Art "Mindestlohnunterschreitung" und "Überschreitung Lohngrenze" können nun verworfen werden.
- Dienstplan Drag & Drop: Durch gedrückt halten der Alt-Taste können Schichten kopiert anstelle von verschoben werden.

### Behobene Fehler

- Bei der Berechnung der geplanten Schichtdauer im Dienstplan wurde die gesetzliche Pause nicht berücksichtigt.

## 1.2.3

### Behobene Fehler

- In der Personalkostenübersicht wurden bei manchen Mitarbeitern fehlerhafte
  Werte in den Spalten "Urlaub" und "Krank" berechnet.
- Bei manchen Mitarbeitern wurde in bestimmten Monaten fehlerhafterweise eine
  Mindestlohnunterschreitungungen gemeldet.
- Das Festschreiben des Kassenbuchs schlug aufgrund von nicht abgeschlossenen
  Tagesabrechnungen fehl auch wenn dies nicht der Fall war.

## 1.2.2

### Neuigkeiten

- Bei der Änderung der Emailadresse eines Mitarbeiters mit Administrationszugang werden nun alle aktiven Sitzungen
  des Mitarbeiters beendet und automatisch eine Email zu Passwort-Neuwahl versandt.

### Behobene Fehler

- Bei manchen Mitarbeitern mit einem Stundensatz von 9,35 € wurde fehlerhafterweise eine Unterschreitung des Mindeslohns gemeldet.
- Bei der Änderung der Emailadresse eines Mitarbeiters mit Administrationszugang wurde der entsprechende Zugang nicht automatisch mitgeändert.

## 1.2.1

### Neuigkeiten

- Detailliertere Zusammenfassung von Arbeitszeiten und Nachtzuschlägen unter **Mitarbeiter**/**Arbeitszeiten** (einzelner Mitarbeiter)

## 1.2.0

### Bemerkungen

Der "Stundenbericht für die manuelle Lohnabrechnung" ist momentan noch unter
**Mitarbeiter**/**Lohnkosten** zu finden (durch wählen der Exportfunktion in
der rechten oberen Ecke). Wir werden jedoch bald einen besseren Ort hierfür
finden ;)

### Neuigkeiten

- Kassenbuch-Export
- Monats-Kontenübersicht für alle Mitarbeiter
- Filter- und Suchoption im Bereich **Mitarbeiter**/**Lohnkosten**
- Auswahl Beliebiger Zeiträume beim Druck der Monats-Stundenübersicht für
  alle Mitarbeiter (Relevant bei monatsübergreifender Lohnabrechnung)
- Anzeige der SFN-Prozentsätze im Stundenbericht für die manuelle Lohnabrechnung

### Änderungen

- Der Bereich **Mitarbeiter**/**Löhne** wurde in **Mitarbeiter**/**Lohnkosten** umbenannt.

### Behobene Fehler

- Bei manchen Nutzern wurde im Bereich **Probleme** trotz existierender Probleme nichts angezeigt.
- Bei Mitarbeitern für die bereits eine Emailadresse gesetzt wurde konnte diese nicht mehr gelöscht werden.

## 1.1.1

### Neuigkeiten

- Problemmeldung bei Unterschreitung des Mindest-Stundenlohns bei Mitarbeitern mit Monatsgehalt und ohne Jahresarbeitszeitkonto.
- Problemmeldung bei Überschreitung des Höchstlohns bei geringfügig beschäftigten Mitarbeitern

### Behobene Fehler

- Bei manchen Nutzern schlug das Versenden des Dienstplans trotz ausreichender Berechtigungen fehl.
- Bei manchen Nutzern schlug das Sortieren der Mitarbeiter im Dienstplan fehl.

## 1.1.0

### Bemerkungen

**WICHTIG:** Durch Änderungen im Berechtigungssystem müssen die Berechtigungen
in den Bereichen **Mitarbeiter**, **Einstellungen**, **Tagesbericht** und **Zeiterfassung** für
alle Mitarbeiter neu vergeben werden!

### Neuigkeiten

- Detailliertes Berechtigungssystem in den Bereichen **Mitarbeiter** und **Einstellungen**
- Ansicht "Berechtigungen" für alle Mitarbeiter
- Benutzerdefinierte Zeiträume für Nachtzuschläge
- Neue Option für die maximale tägliche Anzahl an automatisch gebuchten Mitarbeiteressen
- [Beta] Tagesabrechnung und Kassenbuch

### Änderungen

- Bereich **Tagesbericht** wurde umbenannt in **Zeiterfassung**.
- Berechtigungen **Zeiterfassung** und **Tagesbericht** wurden unter **Zeiterfassung** zusammengefasst.

### Behobene Fehler

- Das Feld "Lohngrenze" bei geringfügig beschäftigten Mitarbeitern wurde gelegentlich nicht richtig angezeigt.
- Mitarbeiteressen wurden in manchen Fällen nicht automatisch gebucht.
- Bei der Meldung von zu langen Arbeitzeiten wurde bei geplanten Schichten die gesetzliche Pause nicht berücksichtigt.
- Bei der Anwendung von Schichtvorlagen für von der Zeiterfassung ausgenommenen Abteilungen wurde keine geplante Zeit hinterlegt.
- Beim Versand von Dienstplänen wurde das Datum nicht korrekt angezeigt.

## 1.0.0

Erster offizieller Release 🎉
