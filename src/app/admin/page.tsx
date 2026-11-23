
"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  CalendarDays,
  Scissors,
  Users,
  DollarSign,
  Plus,
  Pencil,
  Trash2,
  Power,
  Loader2,
  LayoutDashboard,
  LogOut,
  X,
} from "lucide-react";
import api from "@/lib/api";
import { signOut } from "@/lib/auth-client";

interface Service {
  _id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  duration: number;
  image: string;
  isActive: boolean;
}

interface DashboardData {
  users: { total: number; customers: number };
  services: { total: number; active: number };
  appointments: {
    total: number;
    pending: number;
    confirmed: number;
    cancelled: number;
  };
  revenue: {
    total: number;
    currency: string;
    successfulPayments: number;
  };
}

const emptyForm = {
  name: "",
  description: "",
  category: "",
  price: "",
  duration: "",
  image: "",
};

export default function AdminPage() {
  const router = useRouter();

  const [dashboard, setDashboard] = useState<DashboardData | null>(null);
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [search, setSearch] = useState("");

  const loadDashboard = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const [dashboardResponse, servicesResponse] = await Promise.all([
        api.get("/api/admin/dashboard"),
        api.get("/api/services/admin/all"),
      ]);

      setDashboard(dashboardResponse.data.dashboard);
      setServices(servicesResponse.data.services);
    } catch (err: any) {
      if (err.response?.status === 401) {
        router.replace("/signin");
        return;
      }

      if (err.response?.status === 403) {
        setError("Access denied. This page is only available to administrators.");
      } else {
        setError(
          err.response?.data?.message || "Failed to load admin dashboard."
        );
      }
    } finally {
      setLoading(false);
    }
  }, [router]);

  useEffect(() => {
    loadDashboard();
  }, [loadDashboard]);

  const resetForm = () => {
    setForm(emptyForm);
    setEditingId(null);
    setShowForm(false);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      setSaving(true);
      setError("");

      const payload = {
        name: form.name.trim(),
        description: form.description.trim(),
        category: form.category.trim(),
        price: Number(form.price),
        duration: Number(form.duration),
        image: form.image.trim(),
      };

      if (editingId) {
        await api.patch(`/api/services/${editingId}`, payload);
      } else {
        await api.post("/api/services", payload);
      }

      resetForm();
      await loadDashboard();
    } catch (err: any) {
      setError(
        err.response?.data?.message || "Failed to save service."
      );
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (service: Service) => {
    setForm({
      name: service.name,
      description: service.description,
      category: service.category,
      price: String(service.price),
      duration: String(service.duration),
      image: service.image || "",
    });

    setEditingId(service._id);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleToggleStatus = async (service: Service) => {
    try {
      setError("");

      await api.patch(`/api/services/${service._id}/status`, {
        isActive: !service.isActive,
      });

      await loadDashboard();
    } catch (err: any) {
      setError(
        err.response?.data?.message || "Failed to update service status."
      );
    }
  };

  const handleDelete = async (service: Service) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${service.name}"?`
    );

    if (!confirmed) return;

    try {
      setError("");
      await api.delete(`/api/services/${service._id}`);
      await loadDashboard();
    } catch (err: any) {
      setError(
        err.response?.data?.message || "Failed to delete service."
      );
    }
  };

  const handleLogout = async () => {
    await signOut();
    router.replace("/signin");
  };

  const filteredServices = services.filter((service) =>
    `${service.name} ${service.category}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f5f8ff]">
        <Loader2 className="h-9 w-9 animate-spin text-[#1765d1]" />
      </main>
    );
  }

  if (error && !dashboard) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f5f8ff] p-6">
        <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-sm">
          <h1 className="text-xl font-bold text-[#172b4d]">
            Admin Dashboard
          </h1>
          <p className="mt-3 text-sm text-red-600">{error}</p>
          <button
            onClick={() => router.replace("/signin")}
            className="mt-6 rounded-lg bg-[#1765d1] px-6 py-3 text-sm font-semibold text-white"
          >
            Go to Sign In
          </button>
        </div>
      </main>
    );
  }

  if (!dashboard) return null;

  const stats = [
    {
      label: "Total Users",
      value: dashboard.users.total,
      icon: Users,
    },
    {
      label: "Total Services",
      value: dashboard.services.total,
      icon: Scissors,
    },
    {
      label: "Appointments",
      value: dashboard.appointments.total,
      icon: CalendarDays,
    },
    {
      label: "Total Revenue",
      value: `৳${dashboard.revenue.total.toLocaleString()}`,
      icon: DollarSign,
    },
  ];

  return (
    <main className="min-h-screen bg-[#f5f8ff] text-[#172b4d]">
      <header className="border-b border-gray-100 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <button
            onClick={() => router.push("/")}
            className="text-2xl font-extrabold tracking-tight text-[#1765d1]"
          >
            Salonbook
          </button>

          <div className="flex items-center gap-4">
            <span className="hidden rounded-full bg-[#f1f6ff] px-4 py-2 text-sm font-semibold text-[#1765d1] sm:inline-block">
              Administrator
            </span>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-semibold transition hover:bg-gray-50"
            >
              <LogOut size={16} />
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm font-medium text-[#1765d1]">
            <LayoutDashboard size={17} />
            Admin Panel
          </div>
          <h1 className="mt-2 text-3xl font-bold">Dashboard Overview</h1>
          <p className="mt-2 text-sm text-gray-500">
            Manage your salon services and monitor platform activity.
          </p>
        </div>

        {error && (
          <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-500">
                    {stat.label}
                  </p>
                  <div className="rounded-xl bg-[#f1f6ff] p-3 text-[#1765d1]">
                    <Icon size={21} />
                  </div>
                </div>
                <h2 className="mt-4 text-3xl font-bold">{stat.value}</h2>
              </div>
            );
          })}
        </section>

        <section className="mt-6 grid gap-5 sm:grid-cols-3">
          {[
            {
              label: "Pending Appointments",
              value: dashboard.appointments.pending,
            },
            {
              label: "Confirmed Appointments",
              value: dashboard.appointments.confirmed,
            },
            {
              label: "Active Services",
              value: dashboard.services.active,
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
            >
              <p className="text-sm text-gray-500">{item.label}</p>
              <p className="mt-2 text-2xl font-bold">{item.value}</p>
            </div>
          ))}
        </section>

        <section className="mt-10">
          <div className="mb-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-2xl font-bold">Manage Services</h2>
              <p className="mt-1 text-sm text-gray-500">
                Create, edit and manage your salon services.
              </p>
            </div>

            <button
              onClick={() => {
                resetForm();
                setShowForm(true);
              }}
              className="flex items-center justify-center gap-2 rounded-xl bg-[#1765d1] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1559bd]"
            >
              <Plus size={18} />
              Add New Service
            </button>
          </div>

          {showForm && (
            <form
              onSubmit={handleSubmit}
              className="mb-7 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
            >
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-lg font-bold">
                  {editingId ? "Edit Service" : "Create New Service"}
                </h3>
                <button
                  type="button"
                  onClick={resetForm}
                  className="rounded-lg p-2 text-gray-500 hover:bg-gray-100"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <label className="text-sm font-semibold">
                  Service Name *
                  <input
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    className="mt-2 w-full rounded-lg border border-gray-200 px-4 py-3 font-normal outline-none focus:border-[#1765d1]"
                    placeholder="e.g. Haircut"
                  />
                </label>

                <label className="text-sm font-semibold">
                  Category *
                  <input
                    required
                    value={form.category}
                    onChange={(e) =>
                      setForm({ ...form, category: e.target.value })
                    }
                    className="mt-2 w-full rounded-lg border border-gray-200 px-4 py-3 font-normal outline-none focus:border-[#1765d1]"
                    placeholder="e.g. Hair"
                  />
                </label>

                <label className="text-sm font-semibold">
                  Price (BDT) *
                  <input
                    required
                    type="number"
                    min="0"
                    step="any"
                    value={form.price}
                    onChange={(e) =>
                      setForm({ ...form, price: e.target.value })
                    }
                    className="mt-2 w-full rounded-lg border border-gray-200 px-4 py-3 font-normal outline-none focus:border-[#1765d1]"
                    placeholder="500"
                  />
                </label>

                <label className="text-sm font-semibold">
                  Duration (minutes) *
                  <input
                    required
                    type="number"
                    min="1"
                    step="1"
                    value={form.duration}
                    onChange={(e) =>
                      setForm({ ...form, duration: e.target.value })
                    }
                    className="mt-2 w-full rounded-lg border border-gray-200 px-4 py-3 font-normal outline-none focus:border-[#1765d1]"
                    placeholder="30"
                  />
                </label>

                <label className="text-sm font-semibold md:col-span-2">
                  Image URL
                  <input
                    type="url"
                    value={form.image}
                    onChange={(e) =>
                      setForm({ ...form, image: e.target.value })
                    }
                    className="mt-2 w-full rounded-lg border border-gray-200 px-4 py-3 font-normal outline-none focus:border-[#1765d1]"
                    placeholder="https://example.com/image.jpg"
                  />
                </label>

                <label className="text-sm font-semibold md:col-span-2">
                  Description *
                  <textarea
                    required
                    rows={4}
                    value={form.description}
                    onChange={(e) =>
                      setForm({ ...form, description: e.target.value })
                    }
                    className="mt-2 w-full resize-y rounded-lg border border-gray-200 px-4 py-3 font-normal outline-none focus:border-[#1765d1]"
                    placeholder="Describe this salon service..."
                  />
                </label>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="submit"
                  disabled={saving}
                  className="flex items-center gap-2 rounded-lg bg-[#1765d1] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1559bd] disabled:opacity-60"
                >
                  {saving && <Loader2 size={16} className="animate-spin" />}
                  {editingId ? "Save Changes" : "Create Service"}
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="rounded-lg border border-gray-200 px-6 py-3 text-sm font-semibold hover:bg-gray-50"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}

          <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
            <div className="flex flex-col gap-4 border-b border-gray-100 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-bold">All Services</h3>
                <p className="mt-1 text-xs text-gray-500">
                  {services.length} services in your catalogue
                </p>
              </div>

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search services..."
                className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-[#1765d1] sm:max-w-xs"
              />
            </div>

            {filteredServices.length === 0 ? (
              <div className="p-12 text-center">
                <Scissors className="mx-auto text-gray-300" size={35} />
                <p className="mt-3 font-semibold">No services found</p>
                <p className="mt-1 text-sm text-gray-500">
                  Add a service or change your search.
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full min-w-[760px] text-left text-sm">
                  <thead className="bg-[#f8faff] text-xs uppercase text-gray-500">
                    <tr>
                      <th className="px-5 py-4">Service</th>
                      <th className="px-5 py-4">Category</th>
                      <th className="px-5 py-4">Price</th>
                      <th className="px-5 py-4">Duration</th>
                      <th className="px-5 py-4">Status</th>
                      <th className="px-5 py-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {filteredServices.map((service) => (
                      <tr key={service._id} className="hover:bg-gray-50">
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-3">
                            {service.image ? (
                              <img
                                src={service.image}
                                alt={service.name}
                                className="h-11 w-11 rounded-lg object-cover"
                              />
                            ) : (
                              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#f1f6ff] text-[#1765d1]">
                                <Scissors size={18} />
                              </div>
                            )}
                            <div>
                              <p className="font-semibold">{service.name}</p>
                              <p className="max-w-[220px] truncate text-xs text-gray-500">
                                {service.description}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-4">{service.category}</td>
                        <td className="px-5 py-4 font-semibold">
                          ৳{service.price.toLocaleString()}
                        </td>
                        <td className="px-5 py-4">{service.duration} min</td>
                        <td className="px-5 py-4">
                          <span
                            className={`rounded-full px-3 py-1 text-xs font-semibold ${
                              service.isActive
                                ? "bg-green-50 text-green-700"
                                : "bg-gray-100 text-gray-500"
                            }`}
                          >
                            {service.isActive ? "Active" : "Inactive"}
                          </span>
                        </td>
                        <td className="px-5 py-4">
                          <div className="flex justify-end gap-2">
                            <button
                              onClick={() => handleEdit(service)}
                              title="Edit service"
                              className="rounded-lg border border-gray-200 p-2 text-[#1765d1] hover:bg-[#f1f6ff]"
                            >
                              <Pencil size={16} />
                            </button>
                            <button
                              onClick={() => handleToggleStatus(service)}
                              title={service.isActive ? "Deactivate" : "Activate"}
                              className="rounded-lg border border-gray-200 p-2 text-amber-600 hover:bg-amber-50"
                            >
                              <Power size={16} />
                            </button>
                            <button
                              onClick={() => handleDelete(service)}
                              title="Delete service"
                              className="rounded-lg border border-gray-200 p-2 text-red-600 hover:bg-red-50"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
