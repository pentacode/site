---
layout: layouts/hilfe/single.njk
title: Zuschläge
icon: badge-percent
---

Zuschläge sind eine Möglichkeit, Ihre Mitarbeiter für Arbeit an bestimmten Tagen und in bestimmten Zeiträumen extra zu entlohnen. Generell sollte man dabei zwischen den gesetzlich bestimmten SFN (Sonntag, Feiertag, Nachts) und weiteren frei definierten Zuschlägen (bspw. für Samstagsschichten) unterscheiden. Diese Unterscheidung ist besonders wichtig, da die gesetzlichen SFN Zuschläge beitragsfrei ausgezahlt werden können. 

## Neue Zuschlagsart hinzufügen

Klicken sie auf {% button icon = "plus", label = "Neue Zuschlagsart"%} um eine neuen Zuschlagsart zu erstellen. Anschließend öffnet sich ein Bearbeitungsdialog in welchem Sie die Eigenschaften des Zuschlags definieren können. 

### Name der Zuschlagsart

Geben Sie hier den Namen der Zuschlagsart ein.

### Gültig an

Hier können Sie auswählen an welchen Daten der Zuschlag den zugeteilten Mitarbeitern automatisch angerechnet werden soll. 

#### Täglich

Der Zuschlag wird allen ausgewählten Mitarbeitern jeden Tag im ausgewählten Zeitraum angerechnet. *Nützlich bspw. für Nachtschichten.*

#### Bestimmte Wochentage

Der Zuschlag wird allen ausgewählten Mitarbeitern an den ausgewählten Tagen angerechnet. Wählen Sie dazu einfach die gewünschten Wochentage aus. 

{% figure caption= "Dieser Zuschlag wird den Mitarbeitern nur Samstags von 20 Uhr bis 4 Uhr des foglenden Tages angerechnet"%}
<img src =  "samstagszuschlag.webp">
{% endfigure %}

#### Feiertage

Sollten Sie einen speziellen Zuschlagssatz für bestimmte Feiertage gewähren wollen - hier können Sie dies. Wählen Sie einfach die gewünschten Feiertage aus der Liste aus. 

#### Datum 

Vielleicht ist der Tag den Sie auswählen wollen gar kein offizieller Feiertag bspw. Neujahr. Unter **Datum** können Sie jeden Tag des Jahres auswählen. 

### Zeiträume

Hier können Sie die Stunden auswählen zu denen der Zuschlag gewährt werden soll. Klicken Sie auf {%icon "plus" %} und {% icon "minus" %} um zusätzliche Zeitspannen hinzuzufügen. Ziehen Sie anschließend die Leisten so mittels Drag&Drop, dass sie den gewünschten Zeitraum beinhalten. 

### Prozent Maximal

Der hier eingetragene Wert gilt als Obergrenze wenn diese Zuschlagsart einem Mitarbeiter zugeteilt wird. Dies verhindert, dass Sie ausversehen einen zu hohen Betrag im Vertrag eines Mitarbeiters angeben. 

{% figure caption= "Wenn sich mal eine null zu viel einschleicht hilft Ihnen der voreingestellte maximale Prozentsatz."%}
<img src ="maximale_prozent.webp">
{% endfigure %}

### Prozent Standardwert

Dieser Wert ist die Norm, die beim Auswählen dieser Zuschlagsart für einen Mitarbeiter ausgewählt wird.

### Beitragsfrei bis zu

Hier wird bestimmt ob der Zuschlag betragsfrei abgerechnet werden kann. **Generell gilt, dass nur gesetzlich verpflichtete SFN-Zuschläge bis zu 25€/h beitragsfrei sind.** Sollte es sich um einen SFN-Zuschlag handeln haben Sie normalerweise natürlich Interesse daran diesen so lange wie möglich beitragsfrei abzurechnen. Deshalb sollte in dieses Feld normalerweise mit 25€/h für gesetzlich verpflichtende und 0€/h für restliche Zuschläge ausgefüllt werden. 

> **Achtung!** Zuschläge außerhalb der gesetzlich vorgeschriebenen SFN-Zuschläge können nicht beitragsfrei abgerechnet werden - dies würde einer Abgabenhinterziehung gleichkommen!

### Bei Ausfall (Urlaub / Krank)

### Mindestdauer

Sollten Zuschläge erst ab einer gewissen Schichtdauer angerechnet werden, können Sie dies hier auswählen. Geben Sie dazu einfach die Mindestdauer in das Feld ein - beim Überschreiten der Schichtlänge wird der Zuschlag für die ganze Schicht angerechnet. 

### Schichtbeginn Vor

Wenn ein Zuschlag nur gewährt werden soll wenn die Schicht vor einem bestimmten Zeitpukt angefangen hat können Sie diesen Zeitpunkt hier definieren. *Diese Option eignet sich bspw. für Nachtzuschläge wenn manche Arbeit schon früh morgens anfangen aber nicht mehr von diesen Nachtzuschlägen profitieren sollten*

### Hat Vorrang Vor...

Es passiert des öfteren, dass mehrere Zuschlagszeiträume aufeinander fallen. Stellen Sie sich etwa vor ein Mitarbeiter arbeitet an einem Sonntag, der zugleich Feiertag ist. Oder eine Nachtschicht ragt von Samstag in den Sonntag. Für diese Fälle muss es klar sein, welche Zuschlagsart berücksichtigt werden soll. Wählen Sie dazu hier die Zuschlagsarten aus, **die vom aktuell ausgewählten Zuschlag überschrieben werden sollen**. 

{% figure caption= "Sie wollen sonntagnachts einen besonderen Anreiz für ihre Mitarbeiter schaffen? Dann sollten Sie diesen Zuschlag vor dem normalen Nachts- und Sonntagszuschlag priorisieren"%}
<img src =  "samstagszuschlag.webp">
{% endfigure %}

## Zuschlagsart bearbeiten

Wenn Sie einen bestehenden Zuschlag bearbeiten wollen klicken Sie auf das **...-Symbol** neben diesem und wählen **Bearbeiten** aus. Sie gelangen anschließend in das gleiche Menü, wie unter [**Neue Zuschläge**](#neue-zuschläge) beschrieben. 

## Zuschlagsart löschen

Wenn Sie eine Zuschlagsart löschen möchten klicken Sie auf das **...-Symbol** neben dieser und wählen **Löschen** aus.

## Zuschlagsart duplizieren

Sie möchten eine weitere Zuschlagsart hinzufügen und eine bestehende als Vorlage nutzen? Klicken Sie auf das **...-Symbol** neben der Vorlage und wählen **Duplizieren** aus. 

## Zuschlagsarten Mitarbeitern zuordnen

Um die nun erstellten Zuschläge Mitarbeitern zuzuordnen, wählen Sie den Reiter **Mitarbeiter** aus und navigieren zu den **Verträgen**. Unter **Zuschläge** können Sie nun die Zuschläge auswählen, die dem Mitarbeiter angerechnet werden sollen. 

Prozent maximal vs Standard
Bei Ausfall wegen Personalplanung

--> Standard SFN Zuschläge schon drinnen? Wenn nicht - button "SFN Zuschläge erstellen"
--> Mindestdauer ab dann oder dann ganze schicht? + Mindestdauer überschritten außerhalb des des Zeitintervalls?
--> Bei Ausfall 

-- Schließt sich automatisch wenn ein Vorrang ausgewählt wird
