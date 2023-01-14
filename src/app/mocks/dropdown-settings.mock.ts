import { IDropdownSettings } from 'ng-multiselect-dropdown';


export const DropdownSettingsMultipleMock = (): IDropdownSettings => {
    return {
        "idField": "item_id",
        "textField": "item_text",
        "selectAllText": "Seleccionar todo",
        "unSelectAllText": "Quitar todo",
        "enableCheckAll": true,
        "allowSearchFilter": true,
        "searchPlaceholderText": "Buscar",
        "noDataAvailablePlaceholderText": "Datos no disponibles"
    }
}

export const DropdownSettingsSingleMock = (): IDropdownSettings => {
    return {
        "singleSelection": true,
        "idField": "item_id",
        "textField": "item_text",
        "allowSearchFilter": true,
        "searchPlaceholderText": "Buscar",
        "noDataAvailablePlaceholderText": "Datos no disponibles",
        "closeDropDownOnSelection": true
    }
}

export const DropdownSettingsSingleNoSearchMock = (): IDropdownSettings => {
    return {
        "singleSelection": true,
        "idField": "item_id",
        "textField": "item_text",
        "noDataAvailablePlaceholderText": "Datos no disponibles",
        "closeDropDownOnSelection": true
    }
}