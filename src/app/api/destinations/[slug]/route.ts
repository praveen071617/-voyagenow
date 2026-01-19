import { NextRequest, NextResponse } from "next/server";
import { getDestinationBySlug, getActivities } from "@/lib/services/destinations";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  try {
    const destination = await getDestinationBySlug(slug);

    if (!destination) {
      return NextResponse.json(
        { error: "Destination not found" },
        { status: 404 }
      );
    }

    // Get activities for this destination
    const activities = await getActivities(destination.id);

    return NextResponse.json({
      destination,
      activities,
    });
  } catch (error) {
    console.error("Error fetching destination:", error);
    return NextResponse.json(
      { error: "Failed to fetch destination" },
      { status: 500 }
    );
  }
}
