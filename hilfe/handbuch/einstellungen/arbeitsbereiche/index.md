---
layout: layouts/hilfe/single.njk
title: Arbeitsbereiche
weight: 3
icon: cubes
keywords:
- arbeitsbereiche
- Abteilung
- standoert
- standort bearbeiten
- standort archivieren
- neue Abteilung
- abteilung archivieren

---
Mit "**Arbeitsbereiche**" umschreiben wir, was in vielen Unternehmen auch als **Abteilungen** bezeichnet wird.

Im Menüpunkt "**Arbeitsbereiche**" legen Sie **Standorte** und deren **Abteilungen** an und können diese bearbeiten. 

Wenn Sie mit Pentacode in Ihrem Unternehmen beginnen, werden Sie aufgefordert einen Standort und eine Abteilung anzulegen, wenn sie "an Bord gehen".

## Neuer Standort

Sie können weitere Standorte anlegen, indem Sie auf {% button icon="plus", label="Neuer Standort" %} klicken.
Es öffnet sich anschließend ein Dialogfenster, in dem Sie einige Daten des
Standorts festlegen können.

**Standortname** und **Adresse** dienen dabei einzig ihrer eigenen Organisation. Die **Standortnummer** können Sie verwenden um jeden Standort klar differenzierbar zu machen, etwa wenn mehrere Standorten den gleichen Namen besitzen.

Das **Bundesland** ist zusätzlich relevant um die verschiedenen Feiertage zu
bestimmen, welche mitunter für die SFN-Zuschläge relevant sind. Wählen Sie dazu
einfach das Bundesland des Standorts aus dem Drop-down Menü aus und die
gesetzlich geregelten Feiertage werden automatisch an- und abgewählt. Sie haben
jedoch immer auch die Option [**manuell Feiertage ab- und anzuwählen**](#feiertage-bearbeiten).

{% figure caption="So legen Sie einen neuen Standort an." %}
<img src="neuer_standort.webp"/>
{% endfigure %}

Wenn Sie den Standort angelegt haben, legen Sie für diesen Standort die 
[entsprechenden Abteilungen](#neue-abteilung) an.

Der neue Standort und seine Abteilungen erscheinen unter dem Menüpunkt "Alle Mitarbeiter" unter "[**Positionen**](/hilfe/handbuch/mitarbeiter-alle/positionen/)". Dort legen Sie fest, welche Mitarbeiter in welchen Standorten und deren Abteilungen eingesetzt werden.

### Feiertage bearbeiten

Wenn Sie einen [neuen Standort anlegen](#neuer-standort) oder
[bearbeiten](#standort-bearbeiten), werden die Feiertage vorerst standardmäßig
für das ausgewählte Bundesland festgelegt. Sollten Sie die Feiertage jedoch
ändern wollen, können Sie diese ganz einfach über das Dialogfenster beim
Bearbeiten des Standorts tun. Klicken Sie dazu auf den Schieberegler, bis dieser bei nicht
gewünschten Feiertagen weiß erscheint und bei gewünschten Feiertage blau. 

{% figure caption="Die Feiertage eines neuen Standorts sollen angepasst werden." %}
<img src = "standort_feiertage.gif"/>
{% endfigure %}

## Standort bearbeiten

Durch Anklicken des {% icon "ellipsis-h" %}-Symbols am rechten oberen Eck können
Sie Angaben zu einem Standort ändern oder ergänzen, indem Sie **"Standort
Bearbeiten"** wählen. Sie kommen so in das gleiche Menü welches
[hier](#neuer-standort) beschrieben ist.

{% figure caption="So können Sie einen bestehenden Standort bearbeiten, archivieren und umziehen." %}
<img src = "standort_bearbeiten.webp"/>
{% endfigure %}

## Standort archivieren

Wenn Sie einen Standort **nicht mehr benötigen** sollten und auch nicht wollen, dass dieser weiterhin in Ihrer Datenbank erscheint, können Sie ihn über das {% icon "archive" %}-Symbol **archivieren**. Der Standort ist dann nicht mehr sichtbar, alle Daten, also alle Angaben zu Mitarbeitern, Arbeitszeiten und Kassenbuch bleiben jedoch erhalten.

Sollten Sie einen archivierten Standort wiederherstellen wollen, wenden Sie sich bitte an unseren Support.

## Neue Abteilung

Um eine neue Abteilung zu erstellen, klicken Sie auf "**+ Neue Abteilung**".

Jede Abteilung muss **mindestens eine Position** ausweisen. Sollten Sie innerhalb einer Abteilung nicht nach Positionen unterscheiden, empfehlen wir als **Positionsbezeichnung** den **Abteilungsnamen** zu verwenden.

{% figure caption="Wenn eine Abteilung nur eine Position hat, verwenden Sie am besten die gleiche Bezeichnung und Farbe." %}
<img src = "neue_abteilung.webp"/>
{% endfigure %}

> {% icon "lightbulb" %} Positionen ordnen Sie ihren händisch Mitarbeitern zu. Nach ihnen richtet sich mitunter das Gehalt im Arbeitsvertrag. Die Abteilung wird dem Mitarbeiter hingegen automatisch zugeteilt, sobal diesem eine Position zugeordnet wird. Nach Abteilungen ordnet sich etwa der Dienstplan.

## Abteilung bearbeiten

Wenn Sie auf eine Abteilung klicken, öffnet diese und kann wie oben beschrieben bearbeitet werden.

## Abteilung archivieren

Wenn Sie eine Abteilung **nicht mehr benötigen** sollten und auch nicht wollen, dass diese weiterhin im Dienstplan gezeigt wird, können Sie diese **archivieren**.

Bearbeiten Sie hierzu die Abteilung, klicken Sie auf das {% icon "ellipsis-h" %} Symbol und dann auf {% button icon="archive", label="Abteilung Archivieren" %}.

Sollten Sie eine archivierte Abteilung wiederherstellen wollen, wenden Sie sich bitte an unseren Support.

## Reihenfolge der Abteilungen ändern

Die Abteilungen sind in der **Reihenfolge** gelistet, in der Sie die Abteilungen beim Einrichten Ihrer Datenbank angelegt haben. In dieser Reihenfolge erscheinen sie auch im **Dienstplan**.

Sie können diese **Reihenfolge** jederzeit **ändern**, indem Sie eine Abteilung einfach per **drag-and-drop** in eine neue Position verschieben. 
