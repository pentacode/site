---
title: Zeiterfassung
weight: 4
icon: stopwatch
---

Egal wie Sie Arbeitszeiten in Pentacode verwalten - über die [Digitale Stempeluhr](/hilfe/handbuch/stempeluhr/) unsere
[Mitarbeiter-App](/hilfe/handbuch/mitarbeiter-app/) oder manuell - Pentacode bietet Ihnen eine Vielzahl von
Einstellungsmöglichkeiten mit denen Sie definieren können, wie und wann sich Mitarbeiter ein- und ausstempeln dürfen,
wie Pausen erfasst werden und vieles mehr.

> Die Zeiterfassungseinstellungen betreffen in Pentacode vor allem das Erfassen von Arbeitszeiten per Digitaler
> Stempeluhr oder Mitarbeiter-App. Aber auch wenn Sie Zeiten ausschließlich manuell erfassen finden Sie hier einige
> relevante Einstellungen, so wie die zum Beispiel die [automatische Pausenberechnung](#pausenberechnung) oder das
> automatische Buchen von [Mitarbeiteressen](#buchung-von-mitarbeiteressen).

## Über Zeiterfassungs-Regelsätze

Zeiterfassungs-Einstellungen werden in Pentacode über sogenannte **Regelsätze** verwaltet. Ein Regelsatz kann die
Zeiterfassung-Einstellungen für Ihren gesamten Betrieb, bestimmte Abteilungen oder sogar einzelne Mitarbeiter bestimmen.
So ist es zum Beispiel üblich, die Abteilungen "Schule" und "Kurzarbeit" (soweit Vorhanden) von der Zeiterfassung per
Stempeluhr auszuschließen, da Zeiten für diese Bereiche in der Regel manuell erfasst werden.

Den ersten Regelsatz erstellt Pentacode für Sie automatisch. Dieser enthält Ihre "globalen" Einstellungen welche für
alle Standorte, Abteilungen und Mitarbeiter Anwendung finden, denen kein anderer Regelsatz zugewiesen ist. Darüber
hinaus können Sie eine beliebige Anzahl an weiteren Regelsätzen definieren und beliebig zuweisen (mehr dazu weiter
unten).

## Regelsätze Verwalten

### Neuen Regelsatz Erstellen

Um einen neuen Regelsatz zu erstellen, klicken Sie einfach auf den Button {{< button label="Neuer Regelsatz" icon="plus" >}}.
Es öffnet sich ein Dialog über den Sie nun die Einstellungen für diesen Regelsatz bearbeiten können. Um den Regelsatz
hinzuzufügen, klicken Sie auf {{< button label="Speichern" >}}. Vergessen Sie nicht, dem Regelsatz einen Namen zu geben!

### Regelsatz Bearbeiten

Einen existierenden Regelsatz bearbeiten Sie, indem Sie einfach den gewünschten Eintrag mit einem Klick aus der Liste
wählen. Es öffnet sich ein Dialog, in dem Sie die gewünschen Änderungen vornehmen können. Klicken Sie auf {{< button
label="Speichern" >}} um die Änderungen zu übernehmen oder {{< button label ="Abbrechen" >}} um die Änderungen zu
verwerfen.

### Regelsatz Entfernen

Sie können einen Regelsatz entfernen, indem Sie auf den {{< icon "ellipsis-h" >}} icon in der rechten oberen Ecke des
Listeneintrags klicken und im Angezeigten Menü die Option {{< icon "trash-alt" >}} **Löschen** wählen.

> **Hinweis:** Der "globale" Regelsatz kann nicht gelöscht werden.

### Regelsatz Duplizieren

Beim Erstellen eines neuen Regelsatzes kann es oft nützlich sein, die Einstellungen eines anderen Regelsatzes zu
kopieren und einzelne Einstellungen anzupassen. Dies können Sie bequem über die Option {{< icon "clone" >}}
**Duplizieren** im {{ icon "ellipsis-h" }}-Menü des zu duplizierenden Eintrags wählen. Es öffnet sich dann ein
Bearbeitungsdialog, in den duplizierten Eintrag noch bearbeiten können bevor Sie durch einen Klick auf den {{< button
label="Speichern" >}} button den Regelsatz hinzufügen.

## Zuordnung von Regelsätzen

{{< figure caption="Regelsätze können einer beliebigen Anzahl von Standorten, Abteilungen und Mitarbeitern zugeordnet werden." class="centered">}}
<img src="regelsatz_zuordnen.gif">
{{< /figure >}}

Regelsätze können einer beliebigen Anzahl von Standorten, Abteilungen und Mitarbeitern zugeordnet werden. Dies
funktioniert wie folgt:

1. Erstellen Sie einen Neuen Regelsatz oder wählen Sie einen existierenden Regelsatz.
2. Klicken Sie auf das {{< button label="hinzufügen" icon="plus" >}} Feld direkt unter dem Namensfeld.
3. Es öffnet sich ein Dropdown mit einer Liste aller Standorte, Abteilungen und Mitarbeiter, denen der Regelsatz noch
   nicht zugeordnet wurde. Klicken Sie einfach auf einen der Einträge um den Regelsatz der/dem entsprechenden Standort,
   Abteilung oder Mitarbeiter zuzuordnen. **Tipp:** Sie können die Liste filtern, indem Sie einen Suchbegriff in das {{<
   button label="hinzufügen" icon="plus" >}}-Feld eingeben.
4. Die/der Standort, Abteilung oder Mitarbeiter erscheinen dann in der Liste unter dem Namensfeld. Um die Zuordnung
   aufzuheben, klicken Sie einfach auf den entsprechenden Eintrag in dieser Liste.
5. Klicken Sie auf {{< button label="Speichern" >}} um den Vorgang abzuschließen oder {{< button label="Abbrechen" >}}
   um die Änderungen zu verwerfen.

> **Hinweis:** Jeder/jedem Standort, Abteilung und Mitarbeiter kann jeweils höchstens ein Regelsatz zugeordnet werden.
> Sollten Sie bei der Zuordnung eine/n Standort, Abteilung oder Mitarbeiter wählen, der/dem bereits ein Regelsatz
> zugeordnet wurde, wird Pentacode Ihnen eine entsprechende Warnung anzeigen und Sie fragen, ob sie die Zuordnung
> überschreiben wollen.

## Anwendung von Regelsätzen

Welcher Regelsatz für eine bestimmte Schicht angewandt wird hängt von dem Arbeitsbereich und zugewiesenem Mitarbeiter
sowie der jeweiligen Zuordnung von Regelsätzen ab. Hierbei werden grundsätzlich spezifischer Zuordnungen (z.B. direkte
Zuordnung zu einem Mitarbeiter) höher priorisisert als weniger spezifische (z.B. Zuordnung zu einem Standort). Die
Anwendungslogig ist wie folgt:

1. Ist dem **Mitarbeiter** ein Regelsatz zugeordnet? {{< icon "arrow-right" >}} **Ja**: Regelsatz anwenden; **Nein**:
   {{< icon "arrow-down" >}}
2. Ist der **Abteilung** ein Regelsatz zugeordnet? {{< icon "arrow-right" >}} **Ja:** Regelsatz anwenden ; **Nein**:
   {{< icon "arrow-down" >}}
3. Ist dem **Standort** ein Regelsatz zugeordnet? {{< icon "arrow-right" >}} **Ja:** Regelsatz anwenden ; **Nein**:
   {{< icon "arrow-down" >}}
4. Verwende den globalen Regelsatz

### Anzeige im Dienstplan & Arbeitszeitblatt

Bei großen Betrieben mit mehreren Regelsätzen und komplexen Zuordnungen kann es oft schwierig sein nachzuvollziehen,
welcher Regelsatz bei einer bestimmten Schicht zur Anwendung kommt. Pentacode schafft Ihnen hier Abhilfe indem es bei
der Dienstplanung und Bearbeitung von Arbeitszeiten den angewandten Regelsatz direkt anzeigt. Selectieren Sie hierfür
einfach die gewüschte Schicht - der Regelsatz erscheint dann unter dem Punkt {{< icon "sliders-h" >}} **Regeln**.

## Pausenberechnung

Unter dem Punkt "Pausen" können Sie defnieren, wie Pausenzeiten in Pentacode erfasst werden sollen. Es stehen Ihnen
hierbei folgende Modi zu Verfügung.

> **Keine Sorge**, egal welchen Pausenmodus Sie wählen, Sie haben immer das letzte Wort. D.h. Pausen können nach
> Abschluss einer Schicht jederzeit nachbarbeitet und korrigiert werden.

### Automatisch

In diesem Modus ermittelt Pentacode ermittelt Pentacode automatisch die Dauer der Pause basierend auf der **entgültigen
Arbeitsdauer** (nicht anhand der geplanten Dauer). Dabei können genau definieren ab welcher Dauer wie viel Pause
berechnet werden soll. Die Standardeinstellungen für die automatische Pause entsprechen den gesetzlichen
Pausenvorschriften - d.h. **30 Minuten** ab einer Arbeitszeit von **6 Stunden** und **45 Minuten** ab einer Arbeitszeit
von **9 Stunden**. Diese Werte können Sie natürlich jederzeit abändern beziehungsweise Stufen hinzufügen oder
entfernen. Zum hinzufügen einer Stufe, klicken Sie den {{< button label="Stufe Hinzufügen" icon="plus" >}} button. Um
eine Stufe zu entfernen, bewegen Sie die Maus darüber und klicken Sie den {{< button icon="trash" >}} button.

### Manuell

In diesem Modus werden Zeiten ausschließlich manuell über die [Digitale Stempeluhr](/hilfe/handbuch/stempeluhr)
oder [Mitarbeiter-App](/hilfe/handbuch/mitarbeiter-app) erfasst. Der Mitarbeiter erfasst dann immer Beginn und Ende jeder Pause -
Pentacode berechnet dann automatisch die Länge der Pause und zählt am Ende alle Teilpausen zusammen um zur entgültigen
gesamten Pausenlänge zu gelangen.

### Automatisch + Manuell

Dieser Pausenmodus kombiniert die Funktionalität der beiden vorgenannten Pausenmodi: Pentacode berechnet zunächst die
automatische Pause anhand der von Ihnen definierten Stufen. Mitarbeiter können dann zusätzlich manuell Pausen
erfassen, welche dann zu der automatischen Pause **hinzugerechnet** werden.

### Geplant

Dieser Pausenmodus funktioniert ähnlich wie der Modus [Automatisch](#automatisch), mit dem Unterschied dass die Länge
der Pause nicht anhand Arbeitszeitdauer und vordefinierten Stufen berechnet, sondern bei jeder Schicht explizit bei der
Planung angegeben wird. Die geplante Pause wird dann beim Abschluss der Schicht automatisch als entdgültige Pause
übernommen.

### Geplant + Manuell

Ähnlich wie der Pausenmodus "Automatisch + Manuell" vereint dieser Pausenmodus die Funktionalität der geplanten und
manuell erfassten Pausen. Manuell erfasste Pausen werden dann beim Abschluss der Schicht zur geplante Pause
**hinzuaddiert**.

## Bezahlte Pausen

Sollten Sie die **Pausenzeiten** Ihrer Mitarbeiter **bezahlen**, können Sie dies durch das Setzen der Buttons
{{< button label="Automatische/Geplante Pausen Werden Bezahlt" >}} und {{< button label="Manuelle Pausen Werden Bezahlt" >}} einstellen.

Bezahlte Pausen werden im Arbeitszeitkonto des Mitarbeiters als Pausen ausgewiesen, bei der Lohnabrechnung in ihrer
Dauer jedoch der Arbeitszeit zugerechnet.

> **Beispiel:** Wenn Sie die **gesetzlichen Pausen bezahlen** wollen, **nicht** aber die Raucherpausen/zusätzlichen Pausen, so setzen Sie den Button bei "**Automatische Pausen Werden Bezahlt**". In diesem Fall werden nur die gesetzlichen Pausen der bezahlten Arbeitszeit zugerechnet, nicht jedoch die Raucherpausen.

## Buchung von Mitarbeiteressen

Über den Punkt **Mitarbeiteressen** können Sie bestimmen, wie viele **Mahlzeiten** einem Mitarbeiter pro Tag
**automatisch hinzugebucht** werden. Es können bis zu drei Essen am Tag automatisch gebucht werden. Pentacode verbucht
dann pro **Teilschicht** jeweils ein Essen, bis das angegebene Limit erreicht ist. Oder sie können das automatische
Buchen von Mitarbeiteressen deaktivieren, indem Sie **Kein Essen Buchen** wählen.

## Stempeluhr

Unter dem Punkt **"Stempeluhr"** können Sie bestimmen, ob Arbeitszeiten über die [Digitale Stempeluhr](/hilfe/handbuch/stempeluhr) und oder [Mitarbeiter-App](/hilfe/handbuch/mitarbeiter-app) erfasst werden sollen oder ob Sie Zeiten ausschließlich manuell über den [Dienstplan](/hilfe/handbuch/dienstplan) oder das [Arbeitszeitblatt](/hilfe/handbuch/arbeitszeitblatt) erfassen möchten. Aktivieren oder deaktivieren Sie hierzu einfach den Button {{< button label="Erfassung per Stempeluhr" >}}.

> Alle weiteren Optionen betreffen ausschließlich die Zeiterfassung per Stempeluhr und werden ausgeblendet, falls diese Option deaktiviert ist.

## Mitarbeiter-App

Hier können Sie einstellen, ob Mitarbeiter zusätzlich zur digitalen Stempeluhr auch über die Mitarbeiter-App Zeiten erfassen dürfen. Hierfür aktivieren oder deaktivieren Sie einfach den Button {{< button label="Stempeln Via MA-App Erlauben" >}}.

### Stempeln Erfordert QR-Code

Über den Button {{< button label="Stempeln Erfordert QR-Code" >}} können Sie einstellen, ob der Mitarbeiter vor dem Ein-
oder Ausstempeln über die Mitarbeiter-App zunächst den QR-Code an der digitalen Stempeluhr scannen muss oder nicht.
Durch das Scannen des QR-Codes kann Pentacode verifizieren, dass sich der Mitarbeiter zum Zeitpunkt des Stempelns am
Arbeitsplatz befindet. Deaktivieren Sie diese Option, falls der Mitarbeiter auch an jenen Arbeitsorten Zeiten erfassen
soll, an denen kein Tablet mit Stempeluhr vorhanden ist (z.B. im Homeoffice).

> Der QR-Code an der digitalen Stempeluhr wechselt alle 30 Minuten und ist jeweils eine Stunde lang gültig. Das heißt
> nach jedem Scannen des QR-Codes muss der Mitarbeiter nach spätestens einer Stunden den Code erneut scannen, bevor er/sie
> erneut ein- oder ausstempeln kann. Auch das erfassen von Pausen erfordert eine verifizierung per QR-Code (falls diese
> Option aktiviert ist).

## Anmeldung / Einstempeln

### Verfrühte Anmeldung

Unter dem Punkt **Bei Verfrühter Anmeldung** können Sie bestimmen, wie Pentacode verfahren soll, wenn ein Mitarbeiter
sich über die Stempeluhr oder Mitarbeiter-App **vor dem geplanten Schichtbeginn** einstempelt.

Bei der Option **Übernehme Zeit laut Dienstplan** wird immer der **geplante Schichtbeginn** als Beginn der Arbeitszeit
übernommen, auch wenn sich der Mitarbeiter schon früher eingestempelt. Die Zeit vor dem geplanten Schichtbeginn wird
also nicht als Arbeitszeit gewertet.

Wählen Sie die Option **Übernehme aktuelle Zeit**, so wird der **Zeitpunkt des Einstempelns** als Arbeitszeitbeginn
übernommen, es wird also auch die Zeit vor dem geplanten Schichtbeginn als Arbeiszeit gewertet.

### Anmeldung Erlauben

Unter **Anmeldung Erlauben** definieren Sie, wie lange vor dem geplanten Schichtbeginn sich der Mitarbeiter einstempeln
darf. Wählen Sie zum Beispiel "1 Stunde Zuvor", dann darf der Mitarbeiter sich bei einem Schichtbeginn von 10 Uhr
frühestens um 9 Uhr einstempeln. Frühere Versuche werden abgelehnt.

### Anmeldung Ohne Dienstplan / Spontane Schicht

Ist Die Option bei {{< button label="Anmeldung Ohne Dienstplan" >}} aktiviert, können zusätzlich zu geplanten Schichten auch **"spontane" Arbeitseinsätze** über die Stempeluhr oder Mitarbeiter-App erfasst werden. Deaktivieren Sie diese Option falls Ihre Mitarbeiter ausschließlich nach Dienstplan arbeiten sollen.

## Abmeldung / Ausstempeln

### Verspätete Abmeldung

Unter dem Punkt **Bei Verspäteter Anmeldung** können Sie bestimmen, wie Pentacode verfahren soll, wenn ein Mitarbeiter
sich über die Stempeluhr oder Mitarbeiter-App **nach dem geplanten Schichtend** einstempelt.

Bei der Option **Übernehme Zeit laut Dienstplan** wird immer das **geplante Schichtende** als Ende der Arbeitszeit
übernommen, auch wenn sich der Mitarbeiter erst später ausstempelt. Die Zeit nach dem geplanten Schichtende wird
also nicht als Arbeitszeit gewertet.

Wählen Sie die Option **Übernehme aktuelle Zeit**, so wird der **Zeitpunkt des Ausstempelns** als Arbeitszeitende
übernommen, es wird also auch die Zeit nach dem geplanten Schichtende als Arbeiszeit gewertet.

### Automatische Abmeldung

Unter dem Punkt **Automatische Abmeldung** legen Sie fest, wie lange der Mitarbeiter sich **nach Beginnen einer Schicht** aus der selbigen ausstempeln kann. Ist dieser Zeitraum verstrichen, wird der Mitarbeiter as der Schicht automatisch "abgemeldet", das heißt er kann sich nicht mehr aktiv aus der Schicht ausstempeln. Dies ist wichtig für den Fall, dass ein Mitarbeiter vergisst, sich aus einer Schicht auszustempeln.

> **WICHTIG:** "Automatische Abmeldung" bedeutet **nicht**, dass automatisch ein Schichtende erfasst wird. Stattdessen vermerkt Pentacode die Schicht als "nicht abgeschlossen" und wird Sie daran erinnern, die Endzeit manuell nachzutragen.

## Rundung von Stempelzeiten

Unter dem Punkt **"Rundung"** können Sie Regeln zur Auf- oder Abrundung von Stempelzeiten bestimmen.

Beispiel für Anmeldung **"auf 5 Minuten Aufrunden"**: Ein Mitarbeiter meldet sich um **17:08** Uhr an, im System ist **17:10** Uhr registriert.

Bespiel für Abmeldung **"Auf 5 Minuten Abrunden"**: Ein Mitarbeiter meldet sich um **22:22** Uhr ab, im System ist **22:20** Uhr registriert.

> **Übrigens**: die Rundungen bei Anmeldung und Abmeldung auf nur volle 5 Minuten entsprechen bei einem durchschnittlichen 8-Stunden-Tag etwas mehr als 1% der Arbeitszeit in Ihrem Unternehmen.

## Anzeige

Über den Punkt "Anzeige" können Sie Darstellung der digitalen Stempeluhr anpassen.

### Mitarbeiter Kurzinfo Anzeigen

Ist diese Option aktiviert, dann wird dem Mitarbeiter bei jedem ein- und ausstempeln (oder einfach durch Eingabe der PIN)
seine aktuellen Überstunden und Resturlaub angezeigt.

### Aktuellen Dienstplan Anzeigen

Ist diese Option aktiviert können Mitarbeiter über einen Button an der Stempeluhr jederzeit den aktuellen Dienstplan
einsehen.
