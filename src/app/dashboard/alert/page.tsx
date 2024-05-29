import { AlertCircle, CheckCheck, RocketIcon } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function AlertPage() {
  return (
    <div className="grid gap-3">
      <Alert>
        <RocketIcon className="h-4 w-4" />
        <AlertTitle>¡Producto creado!</AlertTitle>
        <AlertDescription>
          Creaste con éxito el producto &quot;Dior Sauvage&quot;.
        </AlertDescription>
      </Alert>

      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Oops</AlertTitle>
        <AlertDescription>
          Algo salió mal al intentar crear el producto. Por favor, intenta de
          nuevo.
        </AlertDescription>
      </Alert>

      <Alert variant="success">
        <CheckCheck className="h-4 w-4" />
        <AlertTitle className="text-emerald-700">¡Producto creado!</AlertTitle>
        <AlertDescription>
          Creaste con éxito el producto &quot;Dior Sauvage&quot;.
        </AlertDescription>
      </Alert>
    </div>
  );
}
