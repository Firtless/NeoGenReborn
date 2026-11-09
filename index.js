const SUPABASE_URL = 'YOUR_SUPABASE_URL';
const SUPABASE_KEY = 'YOUR_SUPABASE_ANON_KEY';

const db = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function getStatus() {
  const { data, error } = await db.from('lockers').select('status').eq('id', 1).single();
  if (data) {
    document.getElementById('status').innerText = data.status;
  }
}

async function setStatus(newStatus) {
  const { error } = await db.from('lockers').update({ status: newStatus }).eq('id', 1);
  if (!error) {
    document.getElementById('status').innerText = newStatus;
  }
}

getStatus();
setInterval(getStatus, 3000);