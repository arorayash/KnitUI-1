import { BaseComponentProps } from "../../common/types"
import { ReactNode } from "react"

type onOrderChnageParams = {
  oldIndex: number
  newIndex: number
}
export interface TabsProps extends BaseComponentProps {
  children: ReactNode[] | ReactNode
  defaultActiveKey?: string
  activeKey?: string
  hideAdd?: boolean
  size?: "default" | "medium"
  /** To avoid ambiguity between click & drag, press delay will switch mouseDown to drag after passed time.*/
  pressDelay?: number
  /** This is flag for showing only tab bar/ showing with tab's content */
  hideTabContent?: boolean
  /** When active tab change */
  onChange?: (activeKey: string) => void
  /** Function to be executed when click add button */
  onAddTab: () => void
  /** When tab order is changed, this is a callback function which passes changed order params*/
  onOrderChange?: (onOrderChnageParams: onOrderChnageParams) => any
}

export interface TabPane extends HTMLButtonElement {
  key: string
  tab: string | ReactNode
  active?: boolean
}

export interface TabWrapperInterface<T> extends React.FC<T> {
  TabPanel: any
}

export interface activeTabFlagsInterface {
  left: boolean
  right: boolean
}
