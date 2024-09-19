import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import StarIcon from "./StarIcon";

export function TestimonialCard() {
  return (
    <Card shadow={false} className="max-w-[250px] md:max-w-full p-5" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
      <CardHeader
        floated={false}
        shadow={false}
        className="mx-0 flex items-center gap-4 pt-0 pb-8"
        placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
      >
        <Avatar
          size="md"
          variant="circular"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          alt="Tania Andrew"
          placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
        />
        <div className="flex w-full flex-col gap-0.5">
          <div className="flex items-center justify-between">
            <Typography variant="h5" color="blue-gray" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              Tania Andrew
            </Typography>
            <div className="flex items-center gap-1">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
          </div>
          <Typography color="blue-gray" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>Murid Prisma</Typography>
        </div>
      </CardHeader>
      <CardBody className="mb-6 p-0" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <Typography placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          &quot;Saya menemukan solusi untuk semua kebutuhan pembelajaran saya di Bimbel Bumi Cerdas. Saya menggunakan tempat ini untuk belajar dalam proyek-proyek pribadi saya dan sangat terjangkau. Mereka sangat ramah dan profesional!!!&quot;
        </Typography>
      </CardBody>
    </Card>
  );
}
