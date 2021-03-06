//  Copyright (C) 2012 Matsukei Co.,Ltd.
//
//  This program is free software: you can redistribute it and/or modify
//  it under the terms of the GNU General Public License as published by
//  the Free Software Foundation, either version 3 of the License, or
//  (at your option) any later version.
//
//  This program is distributed in the hope that it will be useful,
//  but WITHOUT ANY WARRANTY; without even the implied warranty of
//  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//  GNU General Public License for more details.
//
//  You should have received a copy of the GNU General Public License
//  along with this program.  If not, see <http://www.gnu.org/licenses/>.

App.addLocale({
  id: "de",
  name: "Deutsch",
  font_family: "'Avenir Next', 'Helvetica Neue'",
  default_settings: {
    // Available values: break-word, none
    text_word_wrap: "break-word",
  },
  messages: {
    toolbar_group_file: "Datei",
    toolbar_group_edit: "Bearbeiten",
    toolbar_group_view: "Ansicht",
    toolbar_group_font: "Schrift",
    toolbar_group_position: "Ausrichtung",

    property_group_basis: "Basic",
    property_group_shape: "Grafik",
    property_group_association: "Zuordnung",
    property_group_font: "Schrift",
    property_group_text: "Text",
    property_group_simple_format: "Simple Format",
    property_group_position: "Ausrichtigung",
    property_group_list: "Liste",
    property_group_list_header: "Listenkopf",
    property_group_list_detail: "Listendetails",
    property_group_list_footer: "Listenfuß",
    property_group_list_page_footer: "Listenseitenfuß",
    property_group_image: "Bild",
    property_group_pageno: "Seitennummer",

    label_title_setting: "Titel",
    label_page_setting: "Seite",
    label_margin_setting: "Abstand",
    label_direction_landscape: "Querformat",
    label_direction_portrait: "Hochformat",
    label_text_edit: "Text bearbeiten",
    label_new_report: "Neue Datei",
    label_report_setting: "Seite einrichten",
    label_specify_zoom_rate: "Zoom",
    label_solid_line: "Durchgezogen",
    label_dotted_line: "Gepunktet",
    label_dashed_line: "Gestrichelt",
    label_left_align: "Links",
    label_center_align: "Mittig",
    label_right_align: "Rechts",
    label_top_align: "Oben",
    label_middle_align: "Mittig",
    label_bottom_align: "Unten",
    label_word_wrap_none: "Beinbehalten",
    label_word_wrap_break_word: "Wort brechen",
    label_overflow_truncate: "Abschneiden",
    label_overflow_fit: "Schrumpfen",
    label_overflow_expand: "Ausdehnen",
    label_datetime_format: "Datum/Zeit-Fformat",
    label_number_format: "Nummernformat",
    label_character_fill_format: "Auffüllzeichen",
    label_fill_left: "Links aufffüllen",
    label_fill_right: "Rechts aufffüllen",
    label_left_position: "Links",
    label_center_position: "Mitte",
    label_right_position: "Rechts",
    label_top_position: "Oben",
    label_middle_position: "Mitte",
    label_bottom_position: "Unten",
    label_color_none: "Keine",
    label_save_file: "Datei öffnen",
    label_open_file: "Datei speichern",
    label_open_image: "Bild öffnen",
    label_confirmation: "Bestätigung",
    label_condition_and: "and",
    label_preference: "Preference",

    label_format: "Format",
    label_format_basic: "Allgemein",
    label_format_type: "Typ",
    label_format_value: "Wert",
    label_shape_type: "Form",
    label_layout: "Layout",
    label_shapes: "Formen",

    field_page_title: "Seitentitel",
    field_paper_type: "Papiertyp",
    field_paper_width: "Breite",
    field_paper_height: "Höhe",
    field_paper_direction: "Seitenorientierung",
    field_margin_top: "Oben",
    field_margin_bottom: "Unten",
    field_margin_left: "Links",
    field_margin_right: "Rechts",
    field_left_position: "Links",
    field_top_position: "Oben",
    field_width: "Breite",
    field_height: "Höhe",
    field_display: "Anzeigen",
    field_text_content: "Text (erste Zeile)",
    field_fill_color: "Füllfarbe",
    field_stroke_color: "Rahmenfarbe",
    field_stroke_width: "Rahmenbreite",
    field_stroke_type: "Rahmentyp",
    field_corner_radius: "Rundungsradius",
    field_description: "Beschreibung",
    field_reference_id: "Referenz-ID",
    field_default_value: "Standard",
    field_font_color: "Farbe",
    field_font_size: "Größe",
    field_font_family: "Schriftart",
    field_text_align: "horizontale Ausrichtung",
    field_text_vertical_align: "vertikale Ausrichtung",
    field_text_word_wrap: "Umbruch",
    field_text_line_height: "Zeilenhöhe",
    field_text_kerning: "Zeichenabstand",
    field_multiple_line: "Mehrzeilig",
    field_text_overflow: "Überlauf",
    field_format_type: "Format Type",
    field_datetime_format: "Datetime Format",
    field_delimiter: "Trennzeichen",
    field_decimal_place: "Dezimalstelle",
    field_fill_length: "Länge",
    field_fill_character: "Zeichen",
    field_fill_direction: "Richtung",
    field_basic_format: "Basic Format",
    field_horizontal_position: "Horizontal",
    field_vertical_position: "Vertikal",
    field_auto_page_break: "Seitenumbruch",
    field_list_header: "Kopf",
    field_list_page_footer: "Fußzeile",
    field_list_footer: "Fuß",
    field_position: "Position",
    field_language: "Sprache",
    field_default_unit: "Standardeinheit",
    field_pageno_format: "Format",
    field_counted_page_target: "Counted Target",
    field_default_counted_page_target: "Bericht",

    button_new_report: "Neu",
    button_save: "Speichern",
    button_saveas: "Speichern unter...",
    button_export_document_as_html: "Exportieren als HTML",
    button_export_document_as_csv: "Exportieren als CSV",
    button_open: "Öffnen",
    button_undo: "Rückgängig",
    button_redo: "Wiederholen",
    button_page_setting: "Seite einrichten",
    button_zoom_in: "+10%",
    button_zoom_out: "-10%",
    button_grid: "Gitternetz",
    button_guide: "Hilfslinien",
    button_add_horizontal_guide: "horizontale Hilfslinie hinzufügen",
    button_add_vertical_guide: "vertikale Hilfslinie hinzufügen",
    button_remove_guide: "Hilfslinie entfernen",
    button_edit_text: "Text bearbeiten",
    button_align: "Ausrichten",
    button_align_left: "Links",
    button_align_center: "Mitte",
    button_align_right: "Rechts",
    button_align_top: "Oben",
    button_align_middle: "Mitte",
    button_align_bottom: "Unten",
    button_fit_same_width: "Breite angleichen",
    button_fit_same_height: "Höhe angleichen",
    button_fit_same_size: "Größe angleichen",
    button_bring_forward: "eine Ebene vor",
    button_bring_to_front: "in den Vordergrund",
    button_send_backward: "eine Ebene zurück",
    button_send_to_back: "in den Hintergrund",
    button_help: "Hilfe",
    button_preference: "Einstellungen",
    button_about: "Über",
    button_go_to_forum: "Discussion Group",
    button_feedback: "Feedback",
    button_translation: "Contribute to Translating",
    button_selection_tool: "Selection",
    button_zoom_tool: "Zoom",
    button_rectangle_tool: "Rechteck",
    button_ellipse_tool: "Ellipse",
    button_line_tool: "Linie",
    button_text_tool: "Text",
    button_image_tool: "Bild",
    button_text_block_tool: "Textblock",
    button_image_block_tool: "Bildblock",
    button_page_number_tool: "Seitennummer",
    button_list_tool: "Liste",

    error_id_is_already_used: "{$id} wird bereits verwendet.",
    error_invalid_value: "Ungültiger Wert.",
    error_id_contains_invalid_characters:
      "The available characters are only an alphanumeric character and an underscore.",
    error_id_is_required: "ID ist erforderlich.",
    error_id_not_found: "{$id} nicht gefunden.",
    error_id_is_not_textblock: "{$id} is not TextBlock shape.",
    error_id_is_not_list: "{$id} is not List shape.",
    error_can_not_specify_myself: "Self cannot be specified.",
    error_id_already_has_reference: "{$id} has already reference.",
    error_can_not_set_the_reference:
      "Cannot set the reference, because has been already referenced from another shapes.",
    error_can_not_save: "Could not be saved.",
    error_paper_size_is_empty: "Paper size is empty.",
    error_can_not_edit_layout_file:
      "This layout file cannot be opened because it is incompatible.\n\nCompatible versions: {$required}\nCurrent version: {$version}",
    error_unknown: "An unexpected error occurred.",
    error_invalid_layout_file:
      "This layout file cannot be opened because has problem.",
    error_failed_to_load_image: "Failed to load image.",
    error_no_valid_placeholder_included: "No a valid placeholder included.",
    error_unexpected_error: "An unexpected error occurred.",

    notice_no_shapes: "No shapes",
    warning_discard_changes:
      "If you have unsaved files, the changes will be discarded. Please be sure to save.",
    warning_discard_changes_en: "",

    text_editor_force_close_confirmation:
      "Es sind ungespeicherte Änderungen voranden. Bist du sicher, dass du ohne zu speichern das Programm schließen möchtest?",
    text_layout_force_close_confirmation:
      "Die Datei wurde geändert.\nVor dem schließen die Änderungen speichern?",
    text_layout_export_definition_confirmation:
      "Before export layout definition, it is necessary to save this layout file.\nSave this layout?",
    text_change_unit: "Change unit to {$unit}",
    text_apply_locale_setting:
      "After reloading the Editor, the setting will be applied.\nDo you want to apply now?",
    text_layout_force_edit_confirmation:
      "Because this layout has been created with a newer version, there is a risk of some configurations are broken by editing.\nAre you sure you want to edit anyway?",
    text_placeholder_of_pageno_description:
      "[Available Placeholders] {page}:Page Number, {total}:Total Page Count",
    text_placeholder_of_base_format_description:
      "[Available Placeholders] {value}:The formatted value",
    text_counted_page_target_description:
      "[Allowed Targets] List (The ID of target List) or Report (Empty)",
    text_feedback_in_project_site: "Project Site",
    text_feedback_in_github: "GitHub Issues",
    text_please_feedback:
      "Please report a your issue in the following site. Also, please tell us in detail the situation that your issue occurred.",
    text_unsaved_layout_exists_confirmation:
      "Last time, unsaved layout exists.\nDo you want to restore?",

    shape_rectangle: "Rechteck",
    shape_ellipse: "Ellipse",
    shape_line: "Linie",
    shape_text: "Text",
    shape_image: "Bild",

    font_gothic: "Gothic",
    font_mincho: "Mincho",

    font_bold: "Fett",
    font_underlined: "Unterstrichen",
    font_italic: "Kursiv",
  },
});
