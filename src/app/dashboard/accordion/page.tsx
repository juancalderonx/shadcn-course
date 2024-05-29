import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    id: 1,
    value: "features",
    title: "Características Principales",
    content: [
      "Ventas y Facturación",
      "Gestión de Inventario",
      "Reportes y Análisis",
      "Gestión de Empleados",
      "Integraciones",
    ],
  },
  {
    id: 2,
    value: "benefits",
    title: "Beneficios del Sistema",
    content: [
      "Aumento de la Eficiencia",
      "Mejora en la Gestión del Inventario",
      "Incremento en las Ventas",
      "Reducción de Errores",
      "Mejor Experiencia del Cliente",
    ],
  },
  {
    id: 3,
    value: "pricing",
    title: "Planes y Precios",
    content: [
      "Plan Básico",
      "Plan Intermedio",
      "Plan Avanzado",
      "Comparación de Planes",
    ],
  },
  {
    id: 4,
    value: "testimonials",
    title: "Testimonios de Clientes",
    content: [
      "Excelente sistema, ha mejorado nuestras ventas.",
      "Fácil de usar y el soporte es muy bueno.",
      "Recomendado para cualquier negocio.",
    ],
  },
  {
    id: 5,
    value: "faq",
    title: "Preguntas Frecuentes (FAQs)",
    content: [
      "¿Qué hardware es compatible con el sistema POS?",
      "¿El sistema funciona sin conexión a internet?",
      "¿Cómo se maneja el soporte técnico?",
      "¿Es posible personalizar el sistema?",
      "¿Ofrecen capacitación para el uso del sistema?",
    ],
  },
];

export default function AccordionPage() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full rounded-lg border border-gray-200"
    >
      {items.map((item) => (
        <AccordionItem key={item.id} value={item.value}>
          <AccordionTrigger className="bg-gray-100 p-4 border-b rounded-t-lg">
            {item.title}
          </AccordionTrigger>
          <AccordionContent className="bg-white p-4">
            <ul>
              {item.content.map((content) => (
                <li key={content}>{content}</li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
