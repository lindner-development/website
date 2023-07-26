import { Combobox, createFilter } from "@kobalte/core";
import { ChevronDown, Check, Languages } from "lucide-solid";
import { createSignal } from "solid-js";
import "./style.css";
const ALL_OPTIONS = ["Apple", "Banana", "Blueberry", "Grapes", "Pineapple"];

export interface LanguageComboboxItem {
    name: string;
    href: string;
    hreflang: string;
}

export interface LanguageComboProps {
    currentLanguage: string;
    languages: LanguageComboboxItem[];
}

export const LanguageCombo = (props: LanguageComboProps) => {
    const filter = createFilter({ sensitivity: "base" });
    const [options, setOptions] = createSignal(ALL_OPTIONS);
    const onOpenChange = (isOpen: boolean, triggerMode?: Combobox.ComboboxTriggerMode) => {
        // Show all options on ArrowDown/ArrowUp and button click.
        if (isOpen && triggerMode === "manual") {
            setOptions(ALL_OPTIONS);
        }
    };
    const onInputChange = (value: string) => {
        setOptions(ALL_OPTIONS.filter(option => filter.contains(option, value)));
    };
    return (
        <Combobox.Root
            options={options()}
            onInputChange={onInputChange}
            onOpenChange={onOpenChange}
            placeholder="Search a fruit…"
            itemComponent={props => (
                <Combobox.Item item={props.item} class="combobox__item">
                    <Combobox.ItemLabel>{props.item.rawValue}</Combobox.ItemLabel>
                    <Combobox.ItemIndicator class="combobox__item-indicator">
                        <Check />
                    </Combobox.ItemIndicator>
                </Combobox.Item>
            )}
        >
            <Combobox.Control class="combobox__control" aria-label="Fruit">
                <Languages />
                <Combobox.Input class="combobox__input" />
                <Combobox.Trigger class="combobox__trigger">
                    <Combobox.Icon class="combobox__icon">
                        <ChevronDown />
                    </Combobox.Icon>
                </Combobox.Trigger>
            </Combobox.Control>
            <Combobox.Portal>
                <Combobox.Content class="combobox__content">
                    <Combobox.Listbox class="combobox__listbox" />
                </Combobox.Content>
            </Combobox.Portal>
        </Combobox.Root>
    );
}