import React, { ElementType, ReactElement, ReactNode } from "react";
import { Menu, MenuItemProps } from "@headlessui/react";

type Props<Item> = {
    label: ReactNode;
    items?: Item[];
    renderItem: <ET extends ElementType>(
        item: Item,
        itemProps: MenuItemProps<ET>,
    ) => ReactElement;
};

/**
 * Dropdown button with dynamic children.
 * E.g. for a nav menu or 'show more actions' button.
 */
const Dropdown = <Item,>({
    label = "Label",
    items = [],
    renderItem,
}: Props<Item>) => {
    return (
        <Menu>
            <Menu.Button className={"button"}>{label}</Menu.Button>
            <Menu.Items className={""}>
                {items.map((item, index) => (
                    <Menu.Item key={index}>
                        {itemProps => renderItem(item, itemProps)}
                    </Menu.Item>
                ))}
            </Menu.Items>
        </Menu>
    );
};

export default Dropdown;
