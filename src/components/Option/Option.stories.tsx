import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, select } from "@storybook/addon-knobs"
import Option from "./"
const Readme = require("./README.md")

storiesOf("Option", module)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      // Show readme before story
      codeTheme: "shades-of-purple",
      // Show readme at the addons panel
      sidebar: Readme,
    },
  })
  .add("basic", () => (
    <Option onClick={(e, val) => alert(val)} value="Option 1">
      <Option.Icon type="oClose" align="right" />
      <Option.Icon type="oStorage" align="right" />
      <Option.Icon type="oClose" align="right" />
      <Option.Text description="hey man what the heck this is wayy cool">
        Cool
      </Option.Text>
    </Option>
  ))
  .add("basic2", () => (
    <Option.OptionGroup title="SOME ITEMS">
      <Option onClick={(e, val) => alert(val)} value="Option 1">
        <Option.Icon type="oClose" fill="yellow" align="right" />
        <Option.Icon type="oSettings" align="left" />
        <Option.Icon type="oClose" align="right" />
        <Option.Text description="hey man what the heck this is wayy cool">
          Cool
        </Option.Text>
      </Option>
      <Option onClick={(e, val) => alert(val)} value="Option 1">
        <Option.Icon type="oClose" fill="yellow" align="right" />
        <Option.Icon type="oOpen" align="left" />
        <Option.Icon type="oClose" align="right" />
        <Option.Text description="hey man what the heck this is wayy cool">
          Cool
        </Option.Text>
      </Option>
      <Option onClick={(e, val) => alert(val)} value="Option 1">
        <Option.Icon type="oClose" fill="yellow" align="right" />
        <Option.Icon type="oOpen" align="left" />
        <Option.Icon type="oClose" align="right" />
        <Option.Text description="hey man what the heck this is wayy cool">
          Cool
        </Option.Text>
      </Option>
    </Option.OptionGroup>
  ))
  .add("With Avatar", () => (
    <Option onClick={(e, val) => alert(val)} value="Option 1">
      <Option.Avatar name="anshumankun" />
      <Option.Text description="what the heck man this is cool heyy">
        Cool
      </Option.Text>
      <Option.Icon type="oClose" align="right" />
    </Option>
  ))