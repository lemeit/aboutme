import { PageFrame, PageFrameProps } from "./types"
import { DefaultFrame } from "./DefaultFrame"
import HeaderConstructor from "../Header"

const Header = HeaderConstructor()

/**
 * Frame que, únicamente en la página de inicio (slug === "index"), muestra
 * el grafo global como elemento central y mueve el contenido de la nota
 * (Content) al sidebar derecho. En cualquier otra página se comporta
 * exactamente igual que el frame "default" (delega directamente en él).
 *
 * El grafo en sí sigue siendo el mismo componente configurado en
 * quartz.config.yaml (layout.position: right para el plugin de grafo);
 * acá simplemente se reordenan los slots ya resueltos por Quartz, sin
 * tocar ni reimportar el componente.
 */
export const GraphHeroFrame: PageFrame = {
  name: "graph-hero",
  render(props: PageFrameProps) {
    const {
      componentData,
      header,
      beforeBody,
      pageBody: Content,
      afterBody,
      left,
      right,
      footer: Footer,
    } = props

    const isHome = componentData.fileData.slug === "index"

    if (!isHome) {
      return DefaultFrame.render(props)
    }

    return (
      <>
        <div class="left sidebar">
          {left.map((BodyComponent) => (
            <BodyComponent {...componentData} />
          ))}
        </div>

        <div class="center">
          <div class="page-header">
            <Header {...componentData}>
              {header.map((HeaderComponent) => (
                <HeaderComponent {...componentData} />
              ))}
            </Header>
          </div>
          {/* El grafo (y cualquier otro componente configurado en el sidebar
              derecho) pasa a ser el protagonista central del home */}
          {right.map((BodyComponent) => (
            <BodyComponent {...componentData} />
          ))}
        </div>

        <div class="right sidebar">
          <div class="popover-hint">
            {beforeBody.map((BodyComponent) => (
              <BodyComponent {...componentData} />
            ))}
          </div>
          <Content {...componentData} />
          <div class="page-footer">
            {afterBody.map((BodyComponent) => (
              <BodyComponent {...componentData} />
            ))}
          </div>
        </div>

        <Footer {...componentData} />
      </>
    )
  },
}
